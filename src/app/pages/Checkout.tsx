import { motion } from "motion/react";
import { useNavigate, Navigate } from "react-router";
import { useState, useEffect } from "react";
import { CreditCard, Smartphone, Building2, Shield, Check } from "lucide-react";

const inputCls = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-lg border ${
    hasError ? "border-red-400 focus:ring-red-400/50" : "border-border focus:ring-primary/50"
  } bg-input-background focus:outline-none focus:ring-2`;

type CardErrors = {
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardholderName?: string;
};

type UpiErrors = {
  upiId?: string;
};

type BankErrors = {
  bank?: string;
};

type PaymentErrors = CardErrors & UpiErrors & BankErrors;

function validateCard(fields: { cardNumber: string; expiryDate: string; cvv: string; cardholderName: string }): CardErrors {
  const e: CardErrors = {};
  const digits = fields.cardNumber.replace(/\s/g, "");
  if (!/^\d{16}$/.test(digits))
    e.cardNumber = "Card number must be 16 digits.";
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(fields.expiryDate.trim()))
    e.expiryDate = "Enter expiry in MM/YY format.";
  if (!/^\d{3,4}$/.test(fields.cvv.trim()))
    e.cvv = "CVV must be 3 or 4 digits.";
  if (fields.cardholderName.trim().length < 2)
    e.cardholderName = "Please enter the cardholder name.";
  return e;
}

function validateUpi(upiId: string): UpiErrors {
  const e: UpiErrors = {};
  if (!/^[\w.\-+]+@[\w]+$/.test(upiId.trim()))
    e.upiId = "Enter a valid UPI ID (e.g. yourname@upi).";
  return e;
}

function validateBank(bank: string): BankErrors {
  const e: BankErrors = {};
  if (!bank)
    e.bank = "Please select your bank.";
  return e;
}

export default function Checkout() {
  const navigate = useNavigate();
  const [registrationData, setRegistrationData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  // Controlled payment fields
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [upiId, setUpiId] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [paymentErrors, setPaymentErrors] = useState<PaymentErrors>({});

  useEffect(() => {
    console.log("=== CHECKOUT PAGE LOADED ===");
    const data = sessionStorage.getItem("registrationData");
    console.log("SessionStorage data:", data);

    if (data) {
      try {
        const parsedData = JSON.parse(data);
        console.log("Parsed data:", parsedData);
        setRegistrationData(parsedData);
        setIsChecking(false);
      } catch (error) {
        console.error("Error parsing data:", error);
        setIsChecking(false);
      }
    } else {
      console.warn("No registration data found in sessionStorage!");
      setIsChecking(false);
    }
  }, []);

  // Clear errors for the active payment method when switching
  useEffect(() => {
    setPaymentErrors({});
  }, [paymentMethod]);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=== PAYMENT SUBMITTED ===");

    let errs: PaymentErrors = {};
    if (paymentMethod === "card") {
      errs = validateCard({ cardNumber, expiryDate, cvv, cardholderName });
    } else if (paymentMethod === "upi") {
      errs = validateUpi(upiId);
    } else if (paymentMethod === "netbanking") {
      errs = validateBank(selectedBank);
    }

    if (Object.keys(errs).length > 0) {
      setPaymentErrors(errs);
      return;
    }

    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      console.log("Payment processed, clearing session and navigating to success page");
      sessionStorage.removeItem("registrationData");
      navigate("/success");
    }, 2000);
  };

  // Show loading while checking sessionStorage
  if (isChecking) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect if no data found after checking
  if (!registrationData) {
    console.warn("No registration data - redirecting to programs page");
    return <Navigate to="/programs" replace />;
  }

  console.log("Registration data exists:", registrationData);
  const { program } = registrationData;

  if (!program) {
    console.error("Program data is missing!");
    return <Navigate to="/programs" replace />;
  }

  console.log("Program data:", program);
  const totalAmount = program.price * 1.18;

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Complete Your Payment
          </h1>
          <p className="text-xl text-muted-foreground">
            Secure payment gateway powered by industry-leading encryption
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-6"
            >
              <h3 className="text-2xl font-bold mb-6">Select Payment Method</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { id: "card", icon: CreditCard, label: "Card" },
                  { id: "upi", icon: Smartphone, label: "UPI" },
                  { id: "netbanking", icon: Building2, label: "Net Banking" },
                ].map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    className={`flex flex-col items-center gap-2 p-6 rounded-xl border-2 transition-all ${
                      paymentMethod === method.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <method.icon size={32} className={paymentMethod === method.id ? "text-primary" : "text-muted-foreground"} />
                    <span className="font-semibold">{method.label}</span>
                  </button>
                ))}
              </div>

              <form onSubmit={handlePayment} noValidate>
                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => {
                          setCardNumber(e.target.value);
                          setPaymentErrors((p) => ({ ...p, cardNumber: undefined }));
                        }}
                        className={inputCls(!!paymentErrors.cardNumber)}
                      />
                      {paymentErrors.cardNumber && (
                        <p className="mt-1 text-sm text-red-500">{paymentErrors.cardNumber}</p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          maxLength={5}
                          value={expiryDate}
                          onChange={(e) => {
                            setExpiryDate(e.target.value);
                            setPaymentErrors((p) => ({ ...p, expiryDate: undefined }));
                          }}
                          className={inputCls(!!paymentErrors.expiryDate)}
                        />
                        {paymentErrors.expiryDate && (
                          <p className="mt-1 text-sm text-red-500">{paymentErrors.expiryDate}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          maxLength={4}
                          value={cvv}
                          onChange={(e) => {
                            setCvv(e.target.value);
                            setPaymentErrors((p) => ({ ...p, cvv: undefined }));
                          }}
                          className={inputCls(!!paymentErrors.cvv)}
                        />
                        {paymentErrors.cvv && (
                          <p className="mt-1 text-sm text-red-500">{paymentErrors.cvv}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={cardholderName}
                        onChange={(e) => {
                          setCardholderName(e.target.value);
                          setPaymentErrors((p) => ({ ...p, cardholderName: undefined }));
                        }}
                        className={inputCls(!!paymentErrors.cardholderName)}
                      />
                      {paymentErrors.cardholderName && (
                        <p className="mt-1 text-sm text-red-500">{paymentErrors.cardholderName}</p>
                      )}
                    </div>
                  </div>
                )}

                {paymentMethod === "upi" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">UPI ID</label>
                      <input
                        type="text"
                        placeholder="yourname@upi"
                        value={upiId}
                        onChange={(e) => {
                          setUpiId(e.target.value);
                          setPaymentErrors((p) => ({ ...p, upiId: undefined }));
                        }}
                        className={inputCls(!!paymentErrors.upiId)}
                      />
                      {paymentErrors.upiId && (
                        <p className="mt-1 text-sm text-red-500">{paymentErrors.upiId}</p>
                      )}
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        You will receive a payment request on your UPI app
                      </p>
                    </div>
                  </div>
                )}

                {paymentMethod === "netbanking" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Select Bank</label>
                      <select
                        value={selectedBank}
                        onChange={(e) => {
                          setSelectedBank(e.target.value);
                          setPaymentErrors((p) => ({ ...p, bank: undefined }));
                        }}
                        className={inputCls(!!paymentErrors.bank)}
                      >
                        <option value="">Choose your bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                      </select>
                      {paymentErrors.bank && (
                        <p className="mt-1 text-sm text-red-500">{paymentErrors.bank}</p>
                      )}
                    </div>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all font-bold shadow-lg mt-8 disabled:opacity-50"
                >
                  {loading ? "Processing..." : `Pay ₹${totalAmount.toLocaleString()}`}
                </motion.button>
              </form>
            </motion.div>

            <div className="bg-muted rounded-2xl p-6 flex items-start gap-4">
              <Shield className="text-primary flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold mb-1">Secure Payment</p>
                <p className="text-sm text-muted-foreground">
                  Your payment information is encrypted and secure. We never store your card details.
                </p>
              </div>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border sticky top-24"
            >
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Order Summary
              </h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Program</p>
                  <p className="font-semibold">{program.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Participant</p>
                  <p className="font-semibold">{registrationData.fullName}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Program Fee</span>
                  <span className="font-semibold">₹{program.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST (18%)</span>
                  <span className="font-semibold">₹{(program.price * 0.18).toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Total Amount</span>
                  <span className="text-3xl font-bold text-primary">₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary" />
                  <span>Instant confirmation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary" />
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary" />
                  <span>Lifetime access to materials</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
