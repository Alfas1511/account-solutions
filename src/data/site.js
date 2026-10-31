import bookkeeping from "../assets/bookkeeping.jpeg";
import incomeTax from "../assets/income-tax.jpeg";
import gst from "../assets/gst.jpeg";
import businessPlan from "../assets/business-plan.jpeg";
import accounting from "../assets/accounting.jpeg";
import internalAudit from "../assets/internal-audit.jpeg";

export const site = {
  name: "Accounts Solutions",
  short: "Accounts Solutions",
  address: [
    "First Floor,",
    "Oliapuram Shopping Complex",
    "PO Junction, Kothamangalam",
    "Ernakulam, Kerala 686691",
  ],
};

// Office pin, taken from the Google Maps link for Oliapuram Shopping Complex, Kothamangalam 686691.
export const office = { lat: 10.063819, lng: 76.6222501 };

const at = `${office.lat},${office.lng}`;

export const maps = {
  embed: `https://www.google.com/maps?q=${at}&z=17&output=embed`,
  place: `https://www.google.com/maps/search/?api=1&query=${at}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${at}&travelmode=driving`,
};

export const services = [
  {
    title: "Accounting & Bookkeeping",
    text: "Accurate books, ledgers, monthly reports and year-end finalisation for shops, firms and companies.",
    image: bookkeeping,
    alt: "Bookkeeping folder with financial reports, charts and calculator",
  },
  {
    title: "Income Tax Services",
    text: "ITR filing for salaried, business and professionals.",
    image: incomeTax,
    alt: "Income tax return filing on a laptop with calculator and coins",
  },
  {
    title: "GST & Taxation",
    text: "GST registration, monthly and annual returns, reconciliation and compliance advice.",
    image: gst,
    alt: "GST blocks with laptop, calculator and rupee coins",
  },
  {
    title: "Business Plan Consultation",
    text: "Project reports and business plans for bank loans, subsidies and new ventures.",
    image: businessPlan,
    alt: "Business plan notebook with charts on a work desk",
  },
  {
    title: "Business Registration",
    text: "Proprietorship, partnership, LLP and company setup, plus MSME/Udyam registration.",
    image: accounting,
    alt: "Registration forms, calculator and pen on a desk",
  },
  {
    title: "Payroll & Compliance",
    text: "PF/ESI/TDS support and routine statutory filings.",
    image: internalAudit,
    alt: "Laptop showing an internal audit checklist with policy files",
  },
];
