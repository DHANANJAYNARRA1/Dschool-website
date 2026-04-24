import { motion } from "motion/react";
import { useParams, useNavigate, Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, User, GraduationCap } from "lucide-react";
import {
  initEmailJS,
  sendUserConfirmationEmail,
  sendAdminNotificationEmail,
} from "../services/emailService";

initEmailJS();

const programs = {
  "lion": { name: "LION Program", price: 11000 },
  "digital-health-revolution": { name: "Digital Health Revolution", price: 45000 },
  "dales": { name: "DALES Program", price: 18000 },
  "sos": { name: "SOS Program", price: 12000 },
  "lang": { name: "LANG Program", price: 8000 },
  "nurse-360": { name: "Nurse 360", price: 15000 },
  "lantern": { name: "LANTERN Program", price: 5000 },
  "leadership-integrated": { name: "Leadership Integrated Skills", price: 65000 },
  "hospital-manager": { name: "Hospital Manager Programs", price: 75000 },
  "dr-tomorrow": { name: "DR. Tomorrow", price: 0 },
};

const baseInputCls =
  "w-full px-4 py-3 rounded-lg border bg-input-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2";

const inputCls = (hasError: boolean) =>
  `${baseInputCls} ${hasError ? "border-red-400 focus:ring-red-400/50" : "border-border focus:ring-primary/50"}`;

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
  "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
  "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu",
  "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry",
];

const INDIAN_CITIES = [
  "Agra","Ahmedabad","Ajmer","Allahabad","Amaravati","Amritsar","Aurangabad",
  "Bangalore","Bareilly","Bhopal","Bhubaneswar","Bikaner","Chennai","Chandigarh",
  "Coimbatore","Dehradun","Delhi","Dhanbad","Faridabad","Ghaziabad","Gorakhpur",
  "Guntur","Gurugram","Guwahati","Gwalior","Hubballi","Hyderabad","Indore",
  "Jaipur","Jalandhar","Jammu","Jodhpur","Kanpur","Kochi","Kolkata","Kota",
  "Kozhikode","Lucknow","Ludhiana","Madurai","Mangaluru","Meerut","Mumbai",
  "Mysuru","Nagpur","Nashik","Noida","Patna","Puducherry","Pune","Raipur",
  "Rajkot","Ranchi","Salem","Saharanpur","Srinagar","Surat","Thane",
  "Tiruchirappalli","Tiruppur","Vadodara","Varanasi","Vijayawada","Visakhapatnam",
  "Warangal",
];

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  qualification: string;
  specialization: string;
  experience: string;
  currentRole: string;
  currentEmployer: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validateRegistration(data: FormData): FormErrors {
  const e: FormErrors = {};
  if (data.fullName.trim().length < 2)
    e.fullName = "Full name must be at least 2 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    e.email = "Please enter a valid email address.";
  const digits = data.phone.replace(/\D/g, "");
  if (!/^[6-9]\d{9}$/.test(digits) && !/^91[6-9]\d{9}$/.test(digits))
    e.phone = "Enter a valid 10-digit Indian phone number.";
  if (!data.city.trim())
    e.city = "Please enter your city.";
  if (!data.state.trim())
    e.state = "Please enter your state.";
  if (!/^\d{6}$/.test(data.pincode.trim()))
    e.pincode = "Pincode must be exactly 6 digits.";
  if (data.address.trim().length < 10)
    e.address = "Please enter your full address (at least 10 characters).";
  if (!data.qualification)
    e.qualification = "Please select your qualification.";
  if (!data.experience)
    e.experience = "Please select your years of experience.";
  return e;
}

function AutocompleteInput({
  name, value, onChange, placeholder, suggestions, required, hasError,
}: {
  name: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  suggestions: string[];
  required?: boolean;
  hasError?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = value.trim().length > 0
    ? suggestions.filter((s) =>
        s.toLowerCase().startsWith(value.toLowerCase())
      ).slice(0, 6)
    : [];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <input
        type="text"
        name={name}
        required={required}
        value={value}
        autoComplete="off"
        placeholder={placeholder}
        className={inputCls(!!hasError)}
        onChange={(e) => { onChange(e.target.value); setOpen(true); }}
        onFocus={() => { if (value.trim()) setOpen(true); }}
      />
      {open && filtered.length > 0 && (
        <ul className="absolute z-50 top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
          {filtered.map((item) => (
            <li
              key={item}
              onMouseDown={(e) => { e.preventDefault(); onChange(item); setOpen(false); }}
              className="px-4 py-2.5 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Registration() {
  const { programId } = useParams();
  const navigate = useNavigate();

  const program = programs[programId as keyof typeof programs];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    qualification: "",
    specialization: "",
    experience: "",
    currentRole: "",
    currentEmployer: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validateRegistration(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);

    const dataToStore = { ...formData, programId, program };

    try {
      sessionStorage.setItem("registrationData", JSON.stringify(dataToStore));

      // Send both emails in parallel
      const emailData = {
        ...formData,
        programName: program.name,
        programPrice: program.price,
      };

      const [userResult, adminResult] = await Promise.allSettled([
        sendUserConfirmationEmail(emailData),
        sendAdminNotificationEmail(emailData),
      ]);

      if (userResult.status === "rejected") {
        console.error("User email failed:", userResult.reason);
      }
      if (adminResult.status === "rejected") {
        console.error("Admin email failed:", adminResult.reason);
      }

      navigate("/success");
    } catch (error) {
      console.error("Registration error:", error);
      setIsSubmitting(false);
      alert("Registration failed. Please try again.");
    }
  };

  if (!program) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Program not found</h2>
          <Link to="/programs" className="text-primary hover:underline">
            Browse all programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to={`/programs/${programId}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Program
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Register for {program.name}
          </h1>
          <p className="text-xl text-muted-foreground">
            Complete the form below to secure your place in this program
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="bg-card rounded-2xl p-8 shadow-lg border border-border"
        >
          {/* ── Personal Information ── */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <User size={24} className="text-primary" />
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputCls(!!errors.fullName)}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputCls(!!errors.email)}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputCls(!!errors.phone)}
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">City *</label>
                <AutocompleteInput
                  name="city"
                  value={formData.city}
                  onChange={(val) => {
                    setFormData((p) => ({ ...p, city: val }));
                    setErrors((prev) => ({ ...prev, city: undefined }));
                  }}
                  placeholder="Chennai"
                  suggestions={INDIAN_CITIES}
                  hasError={!!errors.city}
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">State *</label>
                <AutocompleteInput
                  name="state"
                  value={formData.state}
                  onChange={(val) => {
                    setFormData((p) => ({ ...p, state: val }));
                    setErrors((prev) => ({ ...prev, state: undefined }));
                  }}
                  placeholder="Tamil Nadu"
                  suggestions={INDIAN_STATES}
                  hasError={!!errors.state}
                />
                {errors.state && (
                  <p className="mt-1 text-sm text-red-500">{errors.state}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className={inputCls(!!errors.pincode)}
                  placeholder="600001"
                />
                {errors.pincode && (
                  <p className="mt-1 text-sm text-red-500">{errors.pincode}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className={inputCls(!!errors.address)}
                placeholder="Street address, apartment/suite number"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-500">{errors.address}</p>
              )}
            </div>
          </div>

          {/* ── Professional Background ── */}
          <div className="mb-8 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap size={24} className="text-primary" />
              Professional Background
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Highest Qualification *
                </label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className={inputCls(!!errors.qualification)}
                >
                  <option value="">Select qualification</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Graduation (BSc Nursing/Allied Health)">
                    Graduation (BSc Nursing/Allied Health)
                  </option>
                  <option value="Masters (MSc Nursing/MHA/MPH)">
                    Masters (MSc Nursing/MHA/MPH)
                  </option>
                  <option value="PhD">PhD</option>
                </select>
                {errors.qualification && (
                  <p className="mt-1 text-sm text-red-500">{errors.qualification}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Specialization</label>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className={inputCls(false)}
                >
                  <option value="">Select specialization</option>
                  <option value="ICU - Intensive Care Unit">ICU - Intensive Care Unit</option>
                  <option value="Emergency/Trauma Care">Emergency/Trauma Care</option>
                  <option value="NICU - Neonatal Intensive Care Unit">NICU - Neonatal Intensive Care Unit</option>
                  <option value="PICU - Pediatric Intensive Care Unit">PICU - Pediatric Intensive Care Unit</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Orthopedic">Orthopedic</option>
                  <option value="Gynaecology">Gynaecology</option>
                  <option value="Gastroenterology">Gastroenterology</option>
                  <option value="Nephrology">Nephrology</option>
                  <option value="Psychiatric">Psychiatric</option>
                  <option value="Geriatric Nursing">Geriatric Nursing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={inputCls(!!errors.experience)}
                >
                  <option value="">Select experience</option>
                  <option value="0-1 years (Fresher)">0-1 years (Fresher)</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-500">{errors.experience}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Current Role</label>
                <select
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleChange}
                  className={inputCls(false)}
                >
                  <option value="">Select current role</option>
                  <option value="CNO - Chief Nursing Officer">CNO - Chief Nursing Officer</option>
                  <option value="NS - Nursing Superintendent">NS - Nursing Superintendent</option>
                  <option value="DNS - Deputy Nursing Superintendent">DNS - Deputy Nursing Superintendent</option>
                  <option value="ANS - Assistant Nursing Superintendent">ANS - Assistant Nursing Superintendent</option>
                  <option value="NS - Nursing Supervisor">NS - Nursing Supervisor</option>
                  <option value="Nursing Incharge">Nursing Incharge</option>
                  <option value="Senior Staff Nurse">Senior Staff Nurse</option>
                  <option value="Junior Staff Nurse">Junior Staff Nurse</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Current Employer</label>
                <input
                  type="text"
                  name="currentEmployer"
                  value={formData.currentEmployer}
                  onChange={handleChange}
                  className={inputCls(false)}
                  placeholder="Hospital/Organization name"
                />
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending & Processing..." : "Register Now"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
