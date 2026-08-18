const CITIES = {
  india: [["Mumbai","Maharashtra"],["Delhi","Delhi"],["Bangalore","Karnataka"],["Hyderabad","Telangana"],
    ["Chennai","Tamil Nadu"],["Kolkata","West Bengal"],["Pune","Maharashtra"],["Ahmedabad","Gujarat"],
    ["Jaipur","Rajasthan"],["Lucknow","Uttar Pradesh"],["Surat","Gujarat"],["Kochi","Kerala"],
    ["Chandigarh","Chandigarh"],["Indore","Madhya Pradesh"],["Patna","Bihar"]],
  us: [["New York","NY"],["Los Angeles","CA"],["Chicago","IL"],["Houston","TX"],["Phoenix","AZ"],
    ["Philadelphia","PA"],["San Antonio","TX"],["San Diego","CA"],["Dallas","TX"],["Austin","TX"]],
  uk: [["London","England"],["Manchester","England"],["Birmingham","England"],["Leeds","England"],
    ["Glasgow","Scotland"],["Edinburgh","Scotland"],["Liverpool","England"],["Bristol","England"],
    ["Cardiff","Wales"],["Belfast","Northern Ireland"]],
  canada: [["Toronto","Ontario"],["Vancouver","British Columbia"],["Montreal","Quebec"],["Calgary","Alberta"],
    ["Ottawa","Ontario"],["Edmonton","Alberta"],["Winnipeg","Manitoba"],["Quebec City","Quebec"],
    ["Halifax","Nova Scotia"],["Victoria","British Columbia"]],
  australia: [["Sydney","New South Wales"],["Melbourne","Victoria"],["Brisbane","Queensland"],["Perth","Western Australia"],
    ["Adelaide","South Australia"],["Canberra","ACT"],["Gold Coast","Queensland"],["Hobart","Tasmania"],
    ["Darwin","Northern Territory"],["Newcastle","New South Wales"]],
  uae: [["Dubai","Dubai"],["Abu Dhabi","Abu Dhabi"],["Sharjah","Sharjah"],["Ajman","Ajman"],
    ["Ras Al Khaimah","RAK"],["Fujairah","Fujairah"],["Al Ain","Abu Dhabi"]],
  singapore: [["Singapore","Central Region"],["Jurong","West Region"],["Tampines","East Region"],
    ["Woodlands","North Region"],["Bishan","Central Region"],["Punggol","North-East Region"]],
  germany: [["Berlin","Berlin"],["Munich","Bavaria"],["Hamburg","Hamburg"],["Frankfurt","Hesse"],
    ["Cologne","North Rhine-Westphalia"],["Stuttgart","Baden-Württemberg"],["Düsseldorf","North Rhine-Westphalia"],
    ["Leipzig","Saxony"]],
  france: [["Paris","Île-de-France"],["Marseille","Provence-Alpes-Côte d'Azur"],["Lyon","Auvergne-Rhône-Alpes"],
    ["Toulouse","Occitanie"],["Nice","Provence-Alpes-Côte d'Azur"],["Nantes","Pays de la Loire"],
    ["Strasbourg","Grand Est"],["Bordeaux","Nouvelle-Aquitaine"]],
  southafrica: [["Johannesburg","Gauteng"],["Cape Town","Western Cape"],["Durban","KwaZulu-Natal"],
    ["Pretoria","Gauteng"],["Port Elizabeth","Eastern Cape"],["Bloemfontein","Free State"]],
  brazil: [["São Paulo","São Paulo"],["Rio de Janeiro","Rio de Janeiro"],["Brasília","Federal District"],
    ["Salvador","Bahia"],["Fortaleza","Ceará"],["Belo Horizonte","Minas Gerais"],["Curitiba","Paraná"]],
  japan: [["Tokyo","Kanto"],["Osaka","Kansai"],["Yokohama","Kanto"],["Nagoya","Chubu"],
    ["Sapporo","Hokkaido"],["Fukuoka","Kyushu"],["Kobe","Kansai"]],
  generic: [["Springfield","Region A"],["Fairview","Region B"],["Riverside","Region C"],["Georgetown","Region D"]]
};
const FIRST_NAMES = ["Aman","Priya","Rahul","Sneha","Vikram","Anjali","Rohan","Kavya","Arjun","Neha",
  "Karan","Pooja","John","Emily","Michael","Sarah","David","Laura","James","Anna"];
const LAST_NAMES = ["Sharma","Verma","Gupta","Iyer","Reddy","Singh","Patel","Nair","Mehta","Das",
  "Smith","Johnson","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Clark"];

const DOMAINS = {
  ecommerce: {
    idPrefix: "ORD",
    categories: {
      "Electronics": ["Smartphone","Bluetooth Earbuds","Laptop","Smart Watch","Power Bank"],
      "Fashion": ["T-Shirt","Kurti","Running Shoes","Handbag","Sunglasses"],
      "Home & Kitchen": ["Non-stick Pan","Mixer Grinder","Bedsheet Set","LED Bulb","Water Bottle"],
      "Beauty": ["Face Wash","Lipstick","Hair Oil","Perfume","Sunscreen"],
      "Books": ["Novel","Self-Help Book","Exam Guide","Comics","Cookbook"],
    },
    priceRange: {"Electronics":[500,60000],"Fashion":[200,4000],"Home & Kitchen":[150,8000],"Beauty":[99,2500],"Books":[99,900]},
    payment: ["UPI","Credit Card","Debit Card","Cash on Delivery","Net Banking","EMI"],
    status: ["Delivered","In Transit","Cancelled","Returned"],
  },
  food: {
    idPrefix: "FD",
    categories: {
      "North Indian": ["Butter Chicken","Paneer Tikka","Dal Makhani","Naan Combo"],
      "South Indian": ["Masala Dosa","Idli Sambar","Uttapam","Filter Coffee"],
      "Fast Food": ["Burger Combo","Pizza (Medium)","Fries & Shake","Wrap"],
      "Desserts": ["Gulab Jamun","Ice Cream Tub","Brownie","Cheesecake Slice"],
    },
    priceRange: {"North Indian":[150,600],"South Indian":[80,350],"Fast Food":[120,500],"Desserts":[60,300]},
    payment: ["UPI","Credit Card","Cash on Delivery","Wallet"],
    status: ["Delivered","In Transit","Cancelled","Refunded"],
  },
  saas: {
    idPrefix: "SUB",
    categories: {
      "Starter Plan": ["Monthly Subscription","Annual Subscription"],
      "Pro Plan": ["Monthly Subscription","Annual Subscription"],
      "Enterprise Plan": ["Monthly Subscription","Annual Subscription"],
    },
    priceRange: {"Starter Plan":[499,999],"Pro Plan":[1499,2999],"Enterprise Plan":[4999,14999]},
    payment: ["Credit Card","Net Banking","Invoice","UPI"],
    status: ["Active","Cancelled","Trial","Past Due"],
  },
  generic: {
    idPrefix: "TXN",
    categories: {
      "Category A": ["Item A1","Item A2","Item A3"],
      "Category B": ["Item B1","Item B2","Item B3"],
      "Category C": ["Item C1","Item C2","Item C3"],
    },
    priceRange: {"Category A":[100,2000],"Category B":[200,5000],"Category C":[50,1000]},
    payment: ["Card","Cash","Bank Transfer"],
    status: ["Completed","Pending","Cancelled"],
  },
  fashion: {
    idPrefix: "FSH",
    categories: {
      "Men's Wear": ["Formal Shirt","Denim Jeans","Blazer","Polo T-Shirt"],
      "Women's Wear": ["Kurti Set","Saree","Party Dress","Palazzo"],
      "Footwear": ["Sneakers","Sandals","Formal Shoes","Boots"],
      "Accessories": ["Watch","Belt","Handbag","Sunglasses"],
    },
    priceRange: {"Men's Wear":[499,4999],"Women's Wear":[599,7999],"Footwear":[799,6999],"Accessories":[299,3999]},
    payment: ["UPI","Credit Card","Debit Card","Cash on Delivery"],
    status: ["Delivered","In Transit","Cancelled","Returned"],
  },
  healthcare: {
    idPrefix: "PAT",
    categories: {
      "Consultation": ["General Physician Visit","Specialist Consultation","Follow-up Visit","Video Consultation"],
      "Diagnostics": ["Blood Test Panel","X-Ray","MRI Scan","ECG"],
      "Pharmacy": ["Prescription Refill","OTC Medicines","Supplements","Medical Devices"],
      "Procedures": ["Minor Surgery","Physiotherapy Session","Vaccination","Dental Cleaning"],
    },
    priceRange: {"Consultation":[300,2500],"Diagnostics":[400,12000],"Pharmacy":[100,3000],"Procedures":[800,25000]},
    payment: ["Cash","Credit Card","Insurance Claim","UPI"],
    status: ["Completed","Scheduled","Cancelled","No-show"],
  },
  banking: {
    idPrefix: "TXN",
    categories: {
      "Savings Account": ["Deposit","Withdrawal","Interest Credit","Fund Transfer"],
      "Loans": ["EMI Payment","Loan Disbursal","Processing Fee","Prepayment"],
      "Cards": ["Card Payment","Annual Fee","Cashback Credit","Late Fee"],
      "Investments": ["Mutual Fund SIP","Fixed Deposit","Stock Purchase","Redemption"],
    },
    priceRange: {"Savings Account":[500,50000],"Loans":[2000,45000],"Cards":[200,15000],"Investments":[1000,100000]},
    payment: ["Net Banking","UPI","Auto-debit","Cheque"],
    status: ["Successful","Pending","Failed","Reversed"],
  },
  travel: {
    idPrefix: "TRV",
    categories: {
      "Flights": ["Domestic Flight","International Flight","Flight Add-on Baggage","Seat Upgrade"],
      "Hotels": ["Standard Room","Deluxe Room","Suite Booking","Extended Stay"],
      "Packages": ["Weekend Getaway","Honeymoon Package","Family Tour Package","Adventure Trip"],
      "Local Transport": ["Cab Booking","Bus Ticket","Train Ticket","Car Rental"],
    },
    priceRange: {"Flights":[2500,35000],"Hotels":[1500,25000],"Packages":[8000,120000],"Local Transport":[150,5000]},
    payment: ["Credit Card","UPI","Net Banking","Wallet"],
    status: ["Confirmed","Cancelled","Refunded","Completed"],
  },
  realestate: {
    idPrefix: "PROP",
    categories: {
      "Residential Sale": ["1BHK Apartment","2BHK Apartment","3BHK Apartment","Independent Villa"],
      "Residential Rent": ["Studio Rental","2BHK Rental","3BHK Rental","PG/Co-living"],
      "Commercial": ["Office Space","Retail Shop","Warehouse","Co-working Desk"],
      "Land": ["Residential Plot","Agricultural Land","Commercial Plot"],
    },
    priceRange: {"Residential Sale":[2500000,15000000],"Residential Rent":[8000,60000],"Commercial":[500000,8000000],"Land":[300000,5000000]},
    payment: ["Bank Transfer","Home Loan Disbursement","Cheque","Cash"],
    status: ["Booked","Under Negotiation","Closed","Cancelled"],
  },
  education: {
    idPrefix: "EDU",
    categories: {
      "Courses": ["Online Course Enrollment","Certification Program","Bootcamp","Workshop"],
      "Tutoring": ["1-on-1 Tutoring Session","Group Class","Doubt-clearing Session","Test Series"],
      "School/College Fees": ["Tuition Fee","Exam Fee","Library Fee","Transport Fee"],
      "Study Material": ["Textbook Set","Practice Kit","E-book Bundle","Video Lecture Pack"],
    },
    priceRange: {"Courses":[999,49999],"Tutoring":[300,3000],"School/College Fees":[2000,80000],"Study Material":[199,4999]},
    payment: ["UPI","Credit Card","Net Banking","EMI"],
    status: ["Paid","Pending","Refunded","Overdue"],
  },
  fitness: {
    idPrefix: "FIT",
    categories: {
      "Memberships": ["Monthly Gym Membership","Annual Gym Membership","Premium Membership","Day Pass"],
      "Classes": ["Yoga Class","Zumba Session","Personal Training","CrossFit Session"],
      "Nutrition": ["Diet Consultation","Supplement Pack","Meal Plan Subscription"],
      "Merchandise": ["Gym Wear","Water Bottle","Resistance Bands","Protein Shaker"],
    },
    priceRange: {"Memberships":[999,25000],"Classes":[200,1500],"Nutrition":[500,5000],"Merchandise":[199,2999]},
    payment: ["UPI","Credit Card","Cash","Debit Card"],
    status: ["Active","Expired","Cancelled","Frozen"],
  },
  telecom: {
    idPrefix: "TEL",
    categories: {
      "Prepaid Plans": ["Daily Data Pack","Monthly Unlimited Plan","Annual Plan","Top-up Recharge"],
      "Postpaid Plans": ["Basic Postpaid","Family Postpaid","Business Postpaid"],
      "Broadband": ["Fiber 100 Mbps","Fiber 300 Mbps","Fiber 1 Gbps Plan"],
      "Add-ons": ["International Roaming Pack","OTT Subscription Bundle","Extra Data Pack"],
    },
    priceRange: {"Prepaid Plans":[19,999],"Postpaid Plans":[299,1999],"Broadband":[699,2999],"Add-ons":[49,999]},
    payment: ["UPI","Auto-debit","Credit Card","Wallet"],
    status: ["Active","Expired","Renewed","Failed"],
  },
  logistics: {
    idPrefix: "SHP",
    categories: {
      "Domestic Shipping": ["Standard Parcel","Express Parcel","Same-day Delivery","Bulk Shipment"],
      "International Shipping": ["International Parcel","Customs Cleared Shipment","Air Freight"],
      "Warehousing": ["Storage Fee","Inventory Handling","Pick & Pack Service"],
      "Returns": ["Reverse Pickup","Return Processing"],
    },
    priceRange: {"Domestic Shipping":[40,1500],"International Shipping":[800,12000],"Warehousing":[200,5000],"Returns":[50,500]},
    payment: ["Prepaid","Cash on Delivery","Corporate Account","Credit Card"],
    status: ["Delivered","In Transit","Delayed","Returned to Sender"],
  },
  media: {
    idPrefix: "SUB",
    categories: {
      "Streaming Plans": ["Basic Plan","Standard Plan","Premium Plan","Family Plan"],
      "Add-ons": ["Extra Screen Add-on","4K Upgrade","Ad-free Upgrade"],
      "Rentals": ["Movie Rental","Pay-per-view Event"],
      "Gift Cards": ["1-Month Gift Card","1-Year Gift Card"],
    },
    priceRange: {"Streaming Plans":[199,999],"Add-ons":[49,299],"Rentals":[99,499],"Gift Cards":[199,1999]},
    payment: ["Credit Card","UPI","App Store Billing","Gift Voucher"],
    status: ["Active","Cancelled","Expired","Trial"],
  },
  automotive: {
    idPrefix: "AUTO",
    categories: {
      "Vehicle Sales": ["Hatchback Booking","Sedan Booking","SUV Booking","Two-wheeler Booking"],
      "Service": ["Periodic Service","Repair Job","Insurance Claim Service","Car Wash"],
      "Parts & Accessories": ["Tyres Set","Battery Replacement","Seat Covers","Infotainment Upgrade"],
      "Test Drives": ["Showroom Test Drive","Home Test Drive"],
    },
    priceRange: {"Vehicle Sales":[400000,2500000],"Service":[800,15000],"Parts & Accessories":[500,20000],"Test Drives":[0,0]},
    payment: ["Bank Transfer","Auto Loan Disbursement","Credit Card","Cash"],
    status: ["Booked","Delivered","Cancelled","In Service"],
  },
  agriculture: {
    idPrefix: "AGR",
    categories: {
      "Crop Sales": ["Wheat (Quintal)","Rice (Quintal)","Cotton (Quintal)","Sugarcane (Ton)"],
      "Inputs": ["Fertilizer Bag","Seed Pack","Pesticide Bottle","Irrigation Kit"],
      "Equipment": ["Tractor Rental","Harvester Rental","Tool Purchase"],
      "Dairy": ["Milk Supply (Litre)","Ghee (Kg)","Paneer (Kg)"],
    },
    priceRange: {"Crop Sales":[1500,3500],"Inputs":[200,3000],"Equipment":[500,15000],"Dairy":[40,600]},
    payment: ["Cash","Bank Transfer","UPI","Government Subsidy"],
    status: ["Completed","Pending Payment","Cancelled"],
  },
  hospitality_events: {
    idPrefix: "EVT",
    categories: {
      "Venue Booking": ["Banquet Hall","Outdoor Lawn","Conference Room","Rooftop Venue"],
      "Catering": ["Per Plate Package - Basic","Per Plate Package - Premium","Live Counter Add-on"],
      "Vendors": ["Photography Package","Decoration Package","DJ & Sound","Anchor/Host"],
      "Tickets": ["General Entry Ticket","VIP Ticket","Workshop Pass"],
    },
    priceRange: {"Venue Booking":[15000,300000],"Catering":[300,1500],"Vendors":[5000,80000],"Tickets":[199,4999]},
    payment: ["Bank Transfer","UPI","Credit Card","Cash"],
    status: ["Confirmed","Cancelled","Completed","Pending Advance"],
  },
  beauty_salon: {
    idPrefix: "SLN",
    categories: {
      "Hair Services": ["Haircut","Hair Spa","Hair Coloring","Keratin Treatment"],
      "Skin Services": ["Facial","Cleanup","Bridal Package","De-tan Treatment"],
      "Nail Services": ["Manicure","Pedicure","Nail Extension"],
      "Products": ["Shampoo","Face Serum","Makeup Kit"],
    },
    priceRange: {"Hair Services":[150,5000],"Skin Services":[300,8000],"Nail Services":[200,2000],"Products":[199,2999]},
    payment: ["Cash","UPI","Credit Card","Membership Credit"],
    status: ["Completed","Booked","Cancelled","No-show"],
  },
  b2b_wholesale: {
    idPrefix: "PO",
    categories: {
      "Raw Materials": ["Steel Sheets (Ton)","Plastic Granules (Kg)","Textile Fabric (Meter)","Timber (Cubic ft)"],
      "Bulk Goods": ["Packaged Food (Carton)","Stationery (Box)","Electronics Components (Unit)"],
      "Machinery": ["Industrial Pump","Conveyor Belt System","Packaging Machine"],
      "Services": ["Freight Contract","Annual Maintenance Contract","Bulk Printing"],
    },
    priceRange: {"Raw Materials":[5000,200000],"Bulk Goods":[2000,80000],"Machinery":[50000,1500000],"Services":[10000,500000]},
    payment: ["Bank Transfer","Letter of Credit","Cheque","Credit Terms (Net 30)"],
    status: ["Fulfilled","Pending","Partially Shipped","Cancelled"],
  },
};

// Suggested Power BI measures / SQL starting points per industry — exported as a bonus
// sheet so people know what to build first instead of staring at a blank canvas.
const KPI_SUGGESTIONS = {
  ecommerce: ["Total Revenue = SUM(Orders[Final Amount])","Average Order Value = AVERAGE(Orders[Final Amount])","Repeat Customer Rate = DISTINCTCOUNT of Customers with >1 Order / Total Customers","Revenue by Seller and Category","Top Warehouses by Order Volume","Discount Impact = compare Final Amount with vs without Discount"],
  fashion: ["Revenue by Brand and Store Type","Average Order Value","Return/Discount Rate by Category","Store Performance by City","Sell-through Rate = Orders / Products listed"],
  food: ["Total Orders and Revenue by Restaurant","Average Delivery Time","Order Frequency per Customer","Revenue by Cuisine Category","Partner Utilization = Orders per Delivery Partner"],
  saas: ["MRR/ARR = SUM(Invoices[Amount]) by month","Churn Rate = Cancelled Subscriptions / Total Subscriptions","Customer Lifetime Value","Sales Rep Performance (Subscriptions closed)","Plan Mix — Revenue by Plan"],
  media: ["Total Watch Time by Content Genre","Active Subscribers by Plan","Average Session Duration","Device Mix (Sessions by Device Type)","Content Popularity (Sessions per Title)"],
  healthcare: ["No-show Rate = No-show Appointments / Total Appointments","Average Revenue per Patient","Doctor Utilization = Appointments per Doctor","Revenue by Service Type and Clinic","Payment Status Breakdown (Billing)"],
  banking: ["Total Deposits vs Withdrawals","Average Account Balance by Branch","Loan Default Rate","Transaction Volume Trend (time series)","Customer Segmentation by Balance Tier"],
  travel: ["Revenue by Booking Type (Hotel/Flight/Package)","Average Booking Value","Cancellation Rate","Seasonal Booking Trend (month-over-month)","Top Routes / Top Hotels by Revenue"],
  realestate: ["Total Deal Value by Locality","Average Days to Close (needs a status-date model)","Agent Performance (Deals closed, Revenue)","Sale vs Rent Mix","Revenue by Property Type"],
  education: ["Enrollment Trend Over Time","Completion Rate = Completed / Total Enrollments","Revenue per Course","Instructor Load (Enrollments per Instructor)","Average Progress % by Course Category"],
  fitness: ["Active Members vs Churned (Membership Status)","Revenue by Plan Type","Class Attendance Rate = Attended / (Attended+No-show)","Trainer Utilization (Classes taught)","Member Retention (Join Date cohort analysis)"],
  telecom: ["Recharge Revenue Trend","ARPU (Average Revenue per User) = Total Recharge Revenue / Subscribers","Complaint Rate = Complaints / Subscribers","Plan Popularity (Recharges by Plan)","Circle-wise Revenue"],
  logistics: ["On-Time Delivery Rate (from Delivery Events)","Average Delivery Time (first to last event)","Revenue by Warehouse","Driver Utilization (Shipments per Driver)","Delayed Shipment Rate"],
  automotive: ["Vehicle Sales Revenue by Showroom","Best-Selling Models","Service Revenue vs Vehicle Sales Revenue","Average Booking Value","Service Frequency per Vehicle"],
  agriculture: ["Total Sales Value by Crop Type","Average Price per Quintal by Mandi","Top Buyers by Volume","Equipment Rental Revenue","Seasonal Crop Sale Trend"],
  hospitality_events: ["Revenue by Venue and Event Type","Average Booking Value","Guest RSVP Rate = Confirmed / Total Guests","Vendor Utilization","Booking Trend by Month"],
  beauty_salon: ["Revenue by Service Category","Stylist Utilization (Appointments per Stylist)","Average Ticket Size","No-show/Cancellation Rate","Product Sales vs Service Revenue"],
  b2b_wholesale: ["Purchase Order Value by Supplier","On-Time Shipment Rate","Buyer Concentration (Revenue by Buyer)","Category Spend Breakdown","Average Fulfillment Time (PO Date to Ship Date)"],
  generic: ["Total Transaction Value","Transactions Over Time (Trend)","Top Customers by Value","Revenue by Category","Location/Region Performance"],
};
function getKpiSuggestions(domainKey){
  return KPI_SUGGESTIONS[domainKey] || KPI_SUGGESTIONS.generic;
}

let generatedData = null;
let generatedIssues = 0;

function rand(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function choice(arr){return arr[Math.floor(Math.random()*arr.length)];}
function weightedChoice(items, weights){
  const total = weights.reduce((a,b)=>a+b,0);
  let r = Math.random()*total;
  for(let i=0;i<items.length;i++){ r-=weights[i]; if(r<=0) return items[i]; }
  return items[items.length-1];
}
function randomDate(startYear,endYear){
  const start = new Date(startYear,0,1).getTime();
  const end = new Date(endYear,11,31).getTime();
  return new Date(start + Math.random()*(end-start));
}
function randomDateBetween(startDate,endDate){
  const start = startDate.getTime();
  const end = endDate.getTime();
  if(end<=start) return new Date(start);
  return new Date(start + Math.random()*(end-start));
}

// Generates a date within [yearStart, yearEnd] biased to follow a chosen business narrative,
// via weighted rejection sampling (a handful of retries against a weight function, falling
// back to a plain uniform date if no candidate is accepted — keeps this cheap and bounded).
function trendDate(yearStart, yearEnd, trendMode){
  if(!trendMode || trendMode==='none') return randomDate(yearStart,yearEnd);
  const start = new Date(yearStart,0,1).getTime();
  const end = new Date(yearEnd,11,31).getTime();
  const MAX_W = 2.6;
  for(let attempt=0; attempt<8; attempt++){
    const d = new Date(start + Math.random()*(end-start));
    const frac = (d.getTime()-start)/Math.max(1,(end-start));
    let w = 1;
    if(trendMode==='steady_growth') w = 0.3 + 1.5*frac;
    else if(trendMode==='post_launch_surge') w = frac<0.15 ? 2.4 : Math.max(0.35, 1.5 - frac*1.3);
    else if(trendMode==='seasonal_spike'){ const m=d.getMonth(); w = (m===9||m===10) ? 2.5 : (m===11 ? 1.6 : 0.7); }
    else if(trendMode==='q3_dip'){ const m=d.getMonth(); w = (m>=6 && m<=8) ? 0.3 : 1.25; }
    if(Math.random() < w/MAX_W) return d;
  }
  return new Date(start + Math.random()*(end-start));
}
function fmtDate(d){
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}

// Direct string-based CSV builder — avoids building a full SheetJS worksheet object
// (which creates a cell object per cell) just to throw it away as text. For large
// datasets this is the difference between seconds and minutes.
function csvEscape(val){
  if(val === null || val === undefined) return '';
  const s = String(val);
  if(/[",\n\r]/.test(s)) return '"' + s.replace(/"/g,'""') + '"';
  return s;
}
// Yields control back to the browser so long generation loops don't lock up the tab —
// called periodically inside every schema builder's main row loop.
function yieldToUI(){
  return new Promise(res=>setTimeout(res,0));
}
function toCSV(rows){
  if(!rows.length) return '';
  const cols = Object.keys(rows[0]);
  const lines = new Array(rows.length + 1);
  lines[0] = cols.map(csvEscape).join(',');
  for(let i=0;i<rows.length;i++){
    const r = rows[i];
    lines[i+1] = cols.map(c=>csvEscape(r[c])).join(',');
  }
  return lines.join('\r\n');
}
// Chunked version — yields to the browser every CHUNK rows so the tab stays responsive
// and the download button can show live progress, instead of one long blocking call.
async function toCSVChunked(rows, onProgress){
  if(!rows.length) return '';
  const CHUNK = 100000;
  const cols = Object.keys(rows[0]);
  const parts = [cols.map(csvEscape).join(',')];
  for(let i=0;i<rows.length;i+=CHUNK){
    const end = Math.min(i+CHUNK, rows.length);
    const buf = new Array(end-i);
    for(let j=i;j<end;j++){
      const r = rows[j];
      buf[j-i] = cols.map(c=>csvEscape(r[c])).join(',');
    }
    parts.push(buf.join('\r\n'));
    if(onProgress) onProgress(end, rows.length);
    await new Promise(res=>setTimeout(res,0)); // yield to the browser
  }
  return parts.join('\r\n');
}

const MARKET_CONFIG = {
  india:       {symbol:"₹",    currency:"INR", multiplier:1},
  us:          {symbol:"$",    currency:"USD", multiplier:0.012},
  uk:          {symbol:"£",    currency:"GBP", multiplier:0.0095},
  canada:      {symbol:"C$",   currency:"CAD", multiplier:0.0164},
  australia:   {symbol:"A$",   currency:"AUD", multiplier:0.0182},
  uae:         {symbol:"AED ", currency:"AED", multiplier:0.044},
  singapore:   {symbol:"S$",   currency:"SGD", multiplier:0.0161},
  germany:     {symbol:"€",    currency:"EUR", multiplier:0.0111},
  france:      {symbol:"€",    currency:"EUR", multiplier:0.0111},
  southafrica: {symbol:"R",    currency:"ZAR", multiplier:0.222},
  brazil:      {symbol:"R$",   currency:"BRL", multiplier:0.065},
  japan:       {symbol:"¥",    currency:"JPY", multiplier:1.8},
  generic:     {symbol:"",     currency:"UNITS", multiplier:1},
};

// Converts a base amount (denominated in the DOMAINS price ranges, which are set in INR terms)
// into a realistic amount for the selected market's currency.
function localAmount(baseINR, market){
  const cfg = MARKET_CONFIG[market] || MARKET_CONFIG.generic;
  const val = baseINR * cfg.multiplier;
  if(cfg.currency === "JPY") return Math.round(val);
  if(val >= 1000) return Math.round(val);
  return Math.round(val*100)/100;
}
function localRand(min, max, market){
  return localAmount(rand(min,max), market);
}

// ---- Company profile: ties table sizing to a declared company size instead of ----
// ---- fixed hardcoded fractions, per the "no hardcoded table sizes" requirement.  ----
const COMPANY_SIZE_CONFIG = {
  startup:     {label:"Startup (lean)",        peopleMult:0.6,  refMult:0.5},
  smb:         {label:"Small/Medium Business", peopleMult:1.0,  refMult:1.0},
  midmarket:   {label:"Mid-Market",             peopleMult:1.6,  refMult:1.6},
  enterprise:  {label:"Enterprise",             peopleMult:2.4,  refMult:2.4},
};
function getCompanySize(){
  const el = document.getElementById('companySize');
  return (el && COMPANY_SIZE_CONFIG[el.value]) ? el.value : 'smb';
}

// A "core" table (Customers, Patients, Members...) scales with the row count AND the
// declared company size/repeat-purchase behavior, but is never hardcoded to a fixed number.
function coreTableSize(rowCount, repeatRatio, sizeKey, min=20){
  const mult = (COMPANY_SIZE_CONFIG[sizeKey] || COMPANY_SIZE_CONFIG.smb).peopleMult;
  return Math.max(min, Math.round(rowCount * repeatRatio * mult));
}
// A "reference" table (Warehouses, Branches, Doctors, Showrooms...) stays a small,
// realistic pool regardless of transaction volume — real businesses don't open a new
// warehouse for every 100 orders — but it still scales gently with company size.
function referenceTableSize(rowCount, sizeKey, {min=3, max=60, density=0.004}={}){
  const mult = (COMPANY_SIZE_CONFIG[sizeKey] || COMPANY_SIZE_CONFIG.smb).refMult;
  return Math.min(max, Math.max(min, Math.round(rowCount * density * mult)));
}

// ---- Person record helper (DRY: used by every schema's people/customer table) ----
const EMAIL_DOMAINS = ["gmail.com","yahoo.com","outlook.com","hotmail.com","proton.me"];
function makeEmail(first,last){
  return `${first.toLowerCase()}.${last.toLowerCase()}${rand(1,999)}@${choice(EMAIL_DOMAINS)}`;
}
function makePhone(market){
  const cfg = MARKET_CONFIG[market] || MARKET_CONFIG.generic;
  const codes = {INR:"+91", USD:"+1", GBP:"+44", CAD:"+1", AUD:"+61", AED:"+971", SGD:"+65", EUR:"+49", ZAR:"+27", BRL:"+55", JPY:"+81", UNITS:"+0"};
  const code = codes[cfg.currency] || "+1";
  return `${code}-${rand(600000000,999999999)}`;
}
// Builds a standard person row: {ID, Name, Email, Phone, City, State, ...extra}
function makePerson(idField, idPrefix, idNum, cities, market, extra={}){
  const [city,state] = choice(cities);
  const first = choice(FIRST_NAMES), last = choice(LAST_NAMES);
  return Object.assign({
    [idField]: `${idPrefix}${idNum}`,
    "Name": `${first} ${last}`,
    "Email": makeEmail(first,last),
    "Phone": makePhone(market),
    "City": city,
    "State": state,
  }, extra);
}

// ---- Single-operator vs marketplace business model detection ----
// Fixes the class of bug where a hardcoded competitor brand list (e.g. "Honda, Tata, Toyota")
// was shown instead of the user's own Company Name. Single-operator businesses (a bank, a gym
// chain, a telecom carrier...) generate data that belongs to ONE company — so every branch/
// showroom/store in the dataset should be that company, not a directory of competitors.
// Marketplace businesses (e-commerce, fashion retail, food delivery) legitimately carry many
// third-party brands/sellers/restaurants, so those keep generated variety.
const OPERATOR_MODEL_DOMAINS = new Set([
  "automotive","banking","telecom","media","fitness","beauty_salon","healthcare",
  "education","realestate","logistics","saas","travel","hospitality_events",
  "b2b_wholesale","agriculture",
]);
function isOperatorModel(domainKey){ return OPERATOR_MODEL_DOMAINS.has(domainKey); }
function operatorLabel(companyName, fallback){
  const trimmed = (companyName||"").trim();
  return trimmed ? trimmed : fallback;
}

const DOMAIN_SCHEMAS = {
  ecommerce: {peopleLabel:"Customers",peopleSingular:"Customer",peoplePrefix:"CUST",catalogLabel:"Products",catalogSingular:"Product",catalogPrefix:"PRD",staffLabel:"Sellers",staffSingular:"Seller",staffPrefix:"SEL",locationLabel:"Warehouses",locationSingular:"Warehouse",locationPrefix:"WH",transactionLabel:"Orders"},
  fashion: {peopleLabel:"Customers",peopleSingular:"Customer",peoplePrefix:"CUST",catalogLabel:"Products",catalogSingular:"Product",catalogPrefix:"PRD",staffLabel:"Sellers",staffSingular:"Seller",staffPrefix:"SEL",locationLabel:"Stores",locationSingular:"Store",locationPrefix:"STR",transactionLabel:"Orders"},
  food: {peopleLabel:"Customers",peopleSingular:"Customer",peoplePrefix:"CUST",catalogLabel:"Menu Items",catalogSingular:"Menu Item",catalogPrefix:"MENU",staffLabel:"Restaurants",staffSingular:"Restaurant",staffPrefix:"REST",locationLabel:"Delivery Zones",locationSingular:"Delivery Zone",locationPrefix:"ZONE",transactionLabel:"Orders"},
  saas: {peopleLabel:"Customers",peopleSingular:"Customer",peoplePrefix:"CUST",catalogLabel:"Plans",catalogSingular:"Plan",catalogPrefix:"PLAN",staffLabel:"Sales Reps",staffSingular:"Sales Rep",staffPrefix:"REP",locationLabel:"Regions",locationSingular:"Region",locationPrefix:"REG",transactionLabel:"Subscriptions"},
  healthcare: {peopleLabel:"Patients",peopleSingular:"Patient",peoplePrefix:"PAT",catalogLabel:"Services",catalogSingular:"Service",catalogPrefix:"SVC",staffLabel:"Doctors",staffSingular:"Doctor",staffPrefix:"DOC",locationLabel:"Clinics",locationSingular:"Clinic",locationPrefix:"CLN",transactionLabel:"Appointments"},
  banking: {peopleLabel:"Customers",peopleSingular:"Customer",peoplePrefix:"CUST",catalogLabel:"Products",catalogSingular:"Product",catalogPrefix:"PRD",staffLabel:"Relationship Managers",staffSingular:"Relationship Manager",staffPrefix:"RM",locationLabel:"Branches",locationSingular:"Branch",locationPrefix:"BR",transactionLabel:"Transactions"},
  travel: {peopleLabel:"Travelers",peopleSingular:"Traveler",peoplePrefix:"TRV",catalogLabel:"Packages",catalogSingular:"Package",catalogPrefix:"PKG",staffLabel:"Travel Agents",staffSingular:"Travel Agent",staffPrefix:"AGT",locationLabel:"Destinations",locationSingular:"Destination",locationPrefix:"DEST",transactionLabel:"Bookings"},
  realestate: {peopleLabel:"Clients",peopleSingular:"Client",peoplePrefix:"CLI",catalogLabel:"Properties",catalogSingular:"Property",catalogPrefix:"PROP",staffLabel:"Agents",staffSingular:"Agent",staffPrefix:"AGT",locationLabel:"Localities",locationSingular:"Locality",locationPrefix:"LOC",transactionLabel:"Deals"},
  education: {peopleLabel:"Students",peopleSingular:"Student",peoplePrefix:"STU",catalogLabel:"Courses",catalogSingular:"Course",catalogPrefix:"CRS",staffLabel:"Instructors",staffSingular:"Instructor",staffPrefix:"INS",locationLabel:"Campuses",locationSingular:"Campus",locationPrefix:"CAM",transactionLabel:"Enrollments"},
  fitness: {peopleLabel:"Members",peopleSingular:"Member",peoplePrefix:"MEM",catalogLabel:"Programs",catalogSingular:"Program",catalogPrefix:"PRG",staffLabel:"Trainers",staffSingular:"Trainer",staffPrefix:"TRN",locationLabel:"Gym Branches",locationSingular:"Gym Branch",locationPrefix:"GYM",transactionLabel:"Bookings"},
  telecom: {peopleLabel:"Subscribers",peopleSingular:"Subscriber",peoplePrefix:"SUB",catalogLabel:"Plans",catalogSingular:"Plan",catalogPrefix:"PLAN",staffLabel:"Retailers",staffSingular:"Retailer",staffPrefix:"RET",locationLabel:"Circles",locationSingular:"Circle",locationPrefix:"CIR",transactionLabel:"Recharges"},
  logistics: {peopleLabel:"Clients",peopleSingular:"Client",peoplePrefix:"CLI",catalogLabel:"Services",catalogSingular:"Service",catalogPrefix:"SVC",staffLabel:"Drivers",staffSingular:"Driver",staffPrefix:"DRV",locationLabel:"Warehouses",locationSingular:"Warehouse",locationPrefix:"WH",transactionLabel:"Shipments"},
  media: {peopleLabel:"Subscribers",peopleSingular:"Subscriber",peoplePrefix:"SUB",catalogLabel:"Titles",catalogSingular:"Title",catalogPrefix:"TTL",staffLabel:"Studios",staffSingular:"Studio",staffPrefix:"STD",locationLabel:"Regions",locationSingular:"Region",locationPrefix:"REG",transactionLabel:"Viewing Sessions"},
  automotive: {peopleLabel:"Customers",peopleSingular:"Customer",peoplePrefix:"CUST",catalogLabel:"Vehicles",catalogSingular:"Vehicle",catalogPrefix:"VEH",staffLabel:"Sales Executives",staffSingular:"Sales Executive",staffPrefix:"SE",locationLabel:"Showrooms",locationSingular:"Showroom",locationPrefix:"SHR",transactionLabel:"Bookings"},
  agriculture: {peopleLabel:"Buyers",peopleSingular:"Buyer",peoplePrefix:"BUY",catalogLabel:"Produce Items",catalogSingular:"Produce Item",catalogPrefix:"ITM",staffLabel:"Farmers",staffSingular:"Farmer",staffPrefix:"FRM",locationLabel:"Mandis",locationSingular:"Mandi",locationPrefix:"MND",transactionLabel:"Sales"},
  hospitality_events: {peopleLabel:"Clients",peopleSingular:"Client",peoplePrefix:"CLI",catalogLabel:"Packages",catalogSingular:"Package",catalogPrefix:"PKG",staffLabel:"Vendors",staffSingular:"Vendor",staffPrefix:"VND",locationLabel:"Venues",locationSingular:"Venue",locationPrefix:"VEN",transactionLabel:"Bookings"},
  beauty_salon: {peopleLabel:"Customers",peopleSingular:"Customer",peoplePrefix:"CUST",catalogLabel:"Services",catalogSingular:"Service",catalogPrefix:"SVC",staffLabel:"Stylists",staffSingular:"Stylist",staffPrefix:"STY",locationLabel:"Salon Branches",locationSingular:"Salon Branch",locationPrefix:"SLN",transactionLabel:"Appointments"},
  b2b_wholesale: {peopleLabel:"Buyers",peopleSingular:"Buyer",peoplePrefix:"BUY",catalogLabel:"Products",catalogSingular:"Product",catalogPrefix:"PRD",staffLabel:"Suppliers",staffSingular:"Supplier",staffPrefix:"SUP",locationLabel:"Warehouses",locationSingular:"Warehouse",locationPrefix:"WH",transactionLabel:"Purchase Orders"},
  generic: {peopleLabel:"Customers",peopleSingular:"Customer",peoplePrefix:"CUST",catalogLabel:"Items",catalogSingular:"Item",catalogPrefix:"ITM",staffLabel:"Vendors",staffSingular:"Vendor",staffPrefix:"VND",locationLabel:"Locations",locationSingular:"Location",locationPrefix:"LOC",transactionLabel:"Transactions"},
};

async function buildRelationalDataset(domainKey, domain, cities, rowCount, detail, yearStart, yearEnd, messiness, market, companyName, sizeKey, trendMode){
  const schema = DOMAIN_SCHEMAS[domainKey] || DOMAIN_SCHEMAS.generic;

  // People (Customers / Patients / Members / Subscribers / etc.)
  const peopleCount = coreTableSize(rowCount, 0.25, sizeKey);
  let people = [];
  for(let i=0;i<peopleCount;i++){
    people.push(makePerson(`${schema.peopleSingular} ID`, schema.peoplePrefix, 10000+i, cities, market));
  }

  // Catalog (Products / Services / Plans / Courses / etc.)
  let catalog = [];
  let cid = 0;
  Object.keys(domain.categories).forEach(cat=>{
    const [pMin,pMax] = domain.priceRange[cat];
    domain.categories[cat].forEach(name=>{
      catalog.push({
        [`${schema.catalogSingular} ID`]: `${schema.catalogPrefix}${1000+cid}`,
        "Category": cat,
        [`${schema.catalogSingular} Name`]: name,
        "Base Price": localRand(pMin,pMax,market),
      });
      cid++;
    });
  });

  // Staff (Sellers / Doctors / Trainers / Agents / Drivers / etc.)
  const staffCount = referenceTableSize(rowCount, sizeKey, {min:8, max:50, density:0.01});
  let staff = [];
  for(let i=0;i<staffCount;i++){
    const [city] = choice(cities);
    staff.push({
      [`${schema.staffSingular} ID`]: `${schema.staffPrefix}${100+i}`,
      "Name": `${choice(FIRST_NAMES)} ${choice(LAST_NAMES)}`,
      "Specialty": choice(Object.keys(domain.categories)),
      "City": city,
    });
  }

  // Locations (Warehouses / Branches / Clinics / Showrooms / etc.)
  const locationCount = referenceTableSize(rowCount, sizeKey, {min:5, max:30, density:0.003});
  let locations = [];
  for(let i=0;i<locationCount;i++){
    const [city,state] = choice(cities);
    locations.push({
      [`${schema.locationSingular} ID`]: `${schema.locationPrefix}${10+i}`,
      "City": city,
      "State": state,
    });
  }

  // Transactions (Orders / Appointments / Bookings / etc.) — the fact table linking everything
  let transactions = [];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const person = choice(people);
    const item = choice(catalog);
    const staffMember = choice(staff);
    const location = choice(locations);
    const date = trendDate(yearStart,yearEnd,trendMode);
    const festiveBoost = (date.getMonth()===9 || date.getMonth()===10) ? 1.4 : 1.0;
    const variance = 0.9 + Math.random()*0.2;
    const unitPrice = Math.round(item["Base Price"]*variance);
    const qty = weightedChoice([1,2,3],[0.7,0.22,0.08]);
    const discount = choice([0,0,5,10,15,20,25,0]);
    const gross = unitPrice*qty*festiveBoost;
    const finalAmt = Math.round(gross*(1-discount/100)*100)/100;

    let row = {
      "Transaction ID": `${domain.idPrefix}${100000+i}`,
      "Date": fmtDate(date),
      [`${schema.peopleSingular} ID`]: person[`${schema.peopleSingular} ID`],
      [`${schema.catalogSingular} ID`]: item[`${schema.catalogSingular} ID`],
      [`${schema.staffSingular} ID`]: staffMember[`${schema.staffSingular} ID`],
      [`${schema.locationSingular} ID`]: location[`${schema.locationSingular} ID`],
      "Quantity": qty,
      "Unit Price": unitPrice,
      "Discount (%)": discount,
      "Final Amount": finalAmt,
      "Status": choice(domain.status),
    };
    if(detail!=="basic"){
      row["Payment Method"] = choice(domain.payment);
      row["Rating"] = weightedChoice([1,2,3,4,5],[0.03,0.05,0.12,0.35,0.45]);
    }
    if(detail==="verydetailed"){
      row["Delivery / Fulfillment Days"] = rand(1,10);
      row["Profit Margin (%)"] = rand(5,40);
    }
    transactions.push(row);
  }

  // Messiness injection across all tables
  let issues = 0;
  if(messiness>0){
    const frac = messiness/100;
    { const n = Math.round(people.length*frac*0.15);
      for(let k=0;k<n;k++){ const idx=rand(0,people.length-1); const c=people[idx]["City"]; const opt=choice(["upper","lower","space"]); people[idx]["City"]=opt==="upper"?c.toUpperCase():opt==="lower"?c.toLowerCase():` ${c} `; issues++; }
    }
    { const n = Math.round(people.length*frac*0.03);
      for(let k=0;k<n;k++){ const idx=rand(0,people.length-1); people[idx]["State"]=choice(["N/A","-","Unknown","n/a"]); issues++; }
    }
    { const n = Math.round(catalog.length*frac*0.2);
      for(let k=0;k<n;k++){ const idx=rand(0,catalog.length-1); const c=catalog[idx]["Category"]; catalog[idx]["Category"]=Math.random()<0.5?c.toLowerCase():`${c} `; issues++; }
    }
    { const n = Math.round(locations.length*frac*0.2);
      for(let k=0;k<n;k++){ const idx=rand(0,locations.length-1); const c=locations[idx]["City"]; const opt=choice(["upper","lower","space"]); locations[idx]["City"]=opt==="upper"?c.toUpperCase():opt==="lower"?c.toLowerCase():` ${c} `; issues++; }
    }
    const missCols = detail==="basic" ? ["Discount (%)","Status"] : ["Rating","Payment Method","Discount (%)"];
    missCols.forEach(col=>{
      const n = Math.round(transactions.length*frac*0.06);
      for(let k=0;k<n;k++){ const idx=rand(0,transactions.length-1); if(col in transactions[idx]){ transactions[idx][col]=""; issues++; } }
    });
    { const n = Math.round(transactions.length*frac*0.10);
      for(let k=0;k<n;k++){
        const idx=rand(0,transactions.length-1);
        const parts=transactions[idx]["Date"].split("-");
        const fmt=choice(["dmy-dash","dmy-slash","mdy-slash"]);
        if(fmt==="dmy-dash") transactions[idx]["Date"]=`${parts[2]}-${parts[1]}-${parts[0]}`;
        else if(fmt==="dmy-slash") transactions[idx]["Date"]=`${parts[2]}/${parts[1]}/${parts[0]}`;
        else transactions[idx]["Date"]=`${parts[1]}/${parts[2]}/${parts[0]}`;
        issues++;
      }
    }
    { const n = Math.round(transactions.length*frac*0.02);
      for(let k=0;k<n;k++){ transactions.push(Object.assign({}, transactions[rand(0,transactions.length-1)])); issues++; }
    }
    { const n = Math.max(1, Math.round(20*frac));
      for(let k=0;k<n;k++){ const idx=rand(0,transactions.length-1); transactions[idx]["Final Amount"]=Math.round(transactions[idx]["Final Amount"]*10*100)/100; issues++; }
    }
    for(let i=transactions.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [transactions[i],transactions[j]]=[transactions[j],transactions[i]]; }
  }

  return {schema, people, catalog, staff, locations, transactions, issues};
}

const CITY_MISSPELL_MAP = {
  "Mumbai":"Mumbay","Bangalore":"Banglore","Kolkata":"Calcutta","Chennai":"Madras",
  "Delhi":"Dehli","Hyderabad":"Hyderbad","Ahmedabad":"Ahemdabad","Pune":"Poona",
  "New York":"New Yourk","Los Angeles":"Los Angelas","Philadelphia":"Philadephia",
  "London":"Londonn","Manchester":"Manchaster","Toronto":"Toronto ",
  "Sydney":"Sidney","Melbourne":"Melborne","Singapore":"Singapoor",
  "Tokyo":"Tokio","Dubai":"Duabi",
};
const HIDDEN_CHARS = ["\u200B","\u00A0","\u200C","\u2060"]; // zero-width space, nbsp, zero-width non-joiner, word joiner
const ENCODING_GLITCH_MAP = {"é":"Ã©","ñ":"Ã±","ü":"Ã¼","'":"â€™","–":"â€“","₹":"â‚¹"};

function corruptEmail(email){
  const opt = choice(["missing_at","missing_dot","typo_domain","spaces"]);
  if(opt==="missing_at") return email.replace("@","");
  if(opt==="missing_dot") return email.replace(/\.(com|me)$/,"");
  if(opt==="typo_domain") return email.replace(/\.(com)$/,".cmo");
  return ` ${email} `;
}
function corruptPhone(phone){
  const opt = choice(["too_short","letters","dashes_missing","extra_digit"]);
  if(opt==="too_short") return phone.slice(0, phone.length-4);
  if(opt==="letters") return phone.replace(/\d{3}$/,"XXX");
  if(opt==="dashes_missing") return phone.replace(/-/g,"");
  return phone + choice(["0","1","2"]);
}
function insertHiddenChar(str){
  const pos = rand(0, str.length);
  return str.slice(0,pos) + choice(HIDDEN_CHARS) + str.slice(pos);
}
function applyEncodingGlitch(str){
  let out = str;
  Object.keys(ENCODING_GLITCH_MAP).forEach(k=>{ out = out.split(k).join(ENCODING_GLITCH_MAP[k]); });
  return out;
}

function applyGenericMessiness(tables, mainTable, messinessPct, market){
  let issues = 0;
  if(messinessPct<=0) return issues;
  const frac = messinessPct/100;
  const cfg = MARKET_CONFIG[market] || MARKET_CONFIG.generic;
  const wrongSymbols = Object.values(MARKET_CONFIG).map(c=>c.symbol).filter(s=>s && s!==cfg.symbol);

  Object.keys(tables).forEach(tName=>{
    const rows = tables[tName];
    if(!rows || !rows.length) return;
    const cols = Object.keys(rows[0]);

    cols.forEach(col=>{
      // Never corrupt ID columns — a column like "Plan ID" would otherwise match the
      // "plan" text-casing rule below and silently break its own referential integrity.
      if(/ id$/i.test(col)) return;

      if(/city/i.test(col)){
        // casing/whitespace mess
        const n1 = Math.round(rows.length*frac*0.10);
        for(let k=0;k<n1;k++){
          const idx = rand(0,rows.length-1);
          const c = String(rows[idx][col]);
          const opt = choice(["upper","lower","space"]);
          rows[idx][col] = opt==="upper"?c.toUpperCase():opt==="lower"?c.toLowerCase():` ${c} `;
          issues++;
        }
        // misspellings
        const n2 = Math.round(rows.length*frac*0.05);
        for(let k=0;k<n2;k++){
          const idx = rand(0,rows.length-1);
          const c = rows[idx][col];
          if(CITY_MISSPELL_MAP[c]){ rows[idx][col] = CITY_MISSPELL_MAP[c]; issues++; }
        }
      } else if(/state|region/i.test(col)){
        const n = Math.round(rows.length*frac*0.03);
        for(let k=0;k<n;k++){
          const idx = rand(0,rows.length-1);
          rows[idx][col] = choice(["N/A","-","Unknown","n/a","NULL"]);
          issues++;
        }
      } else if(col==="Email"){
        const n = Math.round(rows.length*frac*0.06);
        for(let k=0;k<n;k++){
          const idx = rand(0,rows.length-1);
          if(typeof rows[idx][col]==="string"){ rows[idx][col] = corruptEmail(rows[idx][col]); issues++; }
        }
      } else if(col==="Phone"){
        const n = Math.round(rows.length*frac*0.06);
        for(let k=0;k<n;k++){
          const idx = rand(0,rows.length-1);
          if(typeof rows[idx][col]==="string"){ rows[idx][col] = corruptPhone(rows[idx][col]); issues++; }
        }
      } else if(/date/i.test(col)){
        const n = Math.round(rows.length*frac*0.08);
        for(let k=0;k<n;k++){
          const idx = rand(0,rows.length-1);
          const val = rows[idx][col];
          if(typeof val==="string" && /^\d{4}-\d{2}-\d{2}$/.test(val)){
            const parts = val.split("-");
            const fmt = choice(["dmy-dash","dmy-slash","mdy-slash"]);
            if(fmt==="dmy-dash") rows[idx][col] = `${parts[2]}-${parts[1]}-${parts[0]}`;
            else if(fmt==="dmy-slash") rows[idx][col] = `${parts[2]}/${parts[1]}/${parts[0]}`;
            else rows[idx][col] = `${parts[1]}/${parts[2]}/${parts[0]}`;
            issues++;
          }
        }
      } else if(/category|genre|type|specialty|plan|status/i.test(col)){
        const n = Math.round(rows.length*frac*0.05);
        for(let k=0;k<n;k++){
          const idx = rand(0,rows.length-1);
          const c = rows[idx][col];
          if(typeof c==="string" && c.length){
            rows[idx][col] = Math.random()<0.5 ? c.toLowerCase() : `${c} `;
            issues++;
          }
        }
      } else if(/quantity|qty/i.test(col)){
        const n = Math.round(rows.length*frac*0.02);
        for(let k=0;k<n;k++){
          const idx = rand(0,rows.length-1);
          if(typeof rows[idx][col]==="number"){ rows[idx][col] = -Math.abs(rows[idx][col]); issues++; }
        }
      } else if(/amount|price|balance|fee/i.test(col)){
        // occasionally store the amount as text with a currency symbol (type inconsistency)
        // — sometimes even the WRONG market's symbol, a very common real-world data error
        const n = Math.round(rows.length*frac*0.015);
        for(let k=0;k<n;k++){
          const idx = rand(0,rows.length-1);
          if(typeof rows[idx][col]==="number"){
            const sym = Math.random()<0.4 && wrongSymbols.length ? choice(wrongSymbols) : cfg.symbol;
            rows[idx][col] = `${sym}${rows[idx][col]}`;
            issues++;
          }
        }
      } else if(col==="Name"){
        // hidden zero-width/invisible characters
        const n = Math.round(rows.length*frac*0.02);
        for(let k=0;k<n;k++){
          const idx = rand(0,rows.length-1);
          if(typeof rows[idx][col]==="string"){ rows[idx][col] = insertHiddenChar(rows[idx][col]); issues++; }
        }
        // encoding glitches on a few names (apostrophes etc.)
        const n2 = Math.round(rows.length*frac*0.01);
        for(let k=0;k<n2;k++){
          const idx = rand(0,rows.length-1);
          if(typeof rows[idx][col]==="string" && /['éñü–]/.test(rows[idx][col])===false && Math.random()<0.3){
            rows[idx][col] = applyEncodingGlitch(rows[idx][col] + choice(["'s"," –"]));
            issues++;
          }
        }
      }
    });

    // generic missing values (NULL/N/A/blank mixed) in a couple of non-ID, non-Name columns
    const candidateCols = cols.filter(c=>!/id$/i.test(c) && c!=="Name" && c!=="Email" && c!=="Phone");
    candidateCols.slice(0,2).forEach(col=>{
      const n = Math.round(rows.length*frac*0.05);
      for(let k=0;k<n;k++){
        const idx = rand(0,rows.length-1);
        rows[idx][col] = choice(["", "", "N/A", "NULL"]);
        issues++;
      }
    });

    // duplicate CUSTOMER/person records specifically (not just any row): same person,
    // re-inserted with a new ID but slightly different contact info — a very common
    // real-world "duplicate customer" data-quality problem, distinct from duplicate rows.
    if(cols.includes("Name") && cols.includes("Email") && rows.length>5){
      const idCol = cols.find(c=>/ id$/i.test(c));
      const dupCount = Math.max(0, Math.round(rows.length*frac*0.015));
      for(let k=0;k<dupCount;k++){
        const src = rows[rand(0,rows.length-1)];
        const clone = Object.assign({}, src);
        if(idCol) clone[idCol] = `${src[idCol]}-DUP`;
        if(Math.random()<0.5) clone["Email"] = corruptEmail(src["Email"]);
        rows.push(clone);
        issues++;
      }
    }
  });

  // Main transactional table: exact duplicate rows + outliers, then shuffle
  const mainRows = tables[mainTable];
  if(mainRows && mainRows.length){
    const n = Math.round(mainRows.length*frac*0.02);
    for(let k=0;k<n;k++){ mainRows.push(Object.assign({}, mainRows[rand(0,mainRows.length-1)])); issues++; }
    const amountCol = Object.keys(mainRows[0]).find(c=>typeof mainRows[0][c]==="number" && /amount|price|balance|fee/i.test(c));
    if(amountCol){
      const n2 = Math.max(1, Math.round(20*frac));
      for(let k=0;k<n2;k++){
        const idx = rand(0,mainRows.length-1);
        if(typeof mainRows[idx][amountCol]==="number"){ mainRows[idx][amountCol] = Math.round(mainRows[idx][amountCol]*10*100)/100; issues++; }
      }
    }
    for(let i=mainRows.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [mainRows[i],mainRows[j]]=[mainRows[j],mainRows[i]]; }
  }
  return issues;
}

// ---- Custom bespoke schemas per business type ----

async function buildEcommerceSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const custCount = coreTableSize(rowCount, 0.25, sizeKey, 50);
  let customers=[];
  for(let i=0;i<custCount;i++){
    customers.push(makePerson("Customer ID","CUST",10000+i,cities,market));
  }
  const sellerAdj=["Prime","Metro","Urban","Elite","Value","Trusty","Swift","Royal","Nova","Bright"];
  const sellerNoun=["Traders","Retail","Mart","Store","Bazaar","Hub","Emporium","Outlet"];
  const sellerCount=referenceTableSize(rowCount, sizeKey, {min:10, max:200, density:0.01});
  let sellers=[];
  for(let i=0;i<sellerCount;i++){
    const [city,state]=choice(cities);
    sellers.push({"Seller ID":`SLR${2000+i}`,"Seller Name":`${choice(sellerAdj)} ${choice(sellerNoun)}`,"City":city,"State":state,"Seller Rating":Math.round((3+Math.random()*2)*10)/10});
  }
  const whCount=referenceTableSize(rowCount, sizeKey, {min:5, max:cities.length, density:0.004});
  let warehouses=[];
  for(let i=0;i<whCount;i++){
    const [city,state]=cities[i%cities.length];
    warehouses.push({"Warehouse ID":`WH${100+i}`,"City":city,"State":state,"Capacity (units)":rand(5000,50000)});
  }
  const domain=DOMAINS.ecommerce;
  let products=[]; let pid=0;
  Object.keys(domain.categories).forEach(cat=>{
    const [pMin,pMax]=domain.priceRange[cat];
    domain.categories[cat].forEach(name=>{
      products.push({"Product ID":`PRD${1000+pid}`,"Seller ID":choice(sellers)["Seller ID"],"Category":cat,"Product Name":name,"Base Price":localRand(pMin,pMax,market)});
      pid++;
    });
  });
  let orders=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const cust=choice(customers); const prod=choice(products); const wh=choice(warehouses);
    const date=trendDate(yearStart,yearEnd,trendMode);
    const festiveBoost=(date.getMonth()===9||date.getMonth()===10)?1.4:1.0;
    const variance=0.9+Math.random()*0.2;
    const unitPrice=Math.round(prod["Base Price"]*variance);
    const qty=weightedChoice([1,2,3],[0.7,0.22,0.08]);
    const discount=choice([0,0,5,10,15,20,25,0]);
    const gross=unitPrice*qty*festiveBoost;
    const finalAmt=Math.round(gross*(1-discount/100)*100)/100;
    let row={
      "Order ID":`ORD${100000+i}`,"Date":fmtDate(date),
      "Customer ID":cust["Customer ID"],"Product ID":prod["Product ID"],
      "Seller ID":prod["Seller ID"],"Warehouse ID":wh["Warehouse ID"],
      "Quantity":qty,"Unit Price":unitPrice,"Discount (%)":discount,"Final Amount":finalAmt,
      "Status":choice(domain.status),
    };
    if(detail!=="basic"){ row["Payment Method"]=choice(domain.payment); row["Rating"]=weightedChoice([1,2,3,4,5],[0.03,0.05,0.12,0.35,0.45]); }
    if(detail==="verydetailed"){ row["Delivery Days"]=rand(1,10); row["Profit Margin (%)"]=rand(5,40); }
    orders.push(row);
  }
  return {tables:{Customers:customers,Sellers:sellers,Warehouses:warehouses,Products:products,Orders:orders}, mainTable:"Orders"};
}

async function buildFitnessSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const gymName = operatorLabel(companyName, "FitZone Gym");
  const memberCount=coreTableSize(rowCount, 0.3, sizeKey, 50);
  let members=[];
  for(let i=0;i<memberCount;i++){
    members.push(makePerson("Member ID","MEM",10000+i,cities,market,{"Join Date":fmtDate(randomDate(yearStart,yearEnd))}));
  }
  const specialties=["Strength Training","Yoga","Zumba","CrossFit","Cardio","Pilates","Boxing"];
  const trainerCount=referenceTableSize(rowCount, sizeKey, {min:5, max:100, density:0.006});
  let trainers=[];
  for(let i=0;i<trainerCount;i++){
    trainers.push({"Trainer ID":`TRN${100+i}`,"Name":`${choice(FIRST_NAMES)} ${choice(LAST_NAMES)}`,"Gym":gymName,"Specialty":choice(specialties),"Experience (Years)":rand(1,15)});
  }
  const planTypes=["Monthly","Quarterly","Annual","Premium"];
  const planPriceINR={"Monthly":999,"Quarterly":2699,"Annual":9999,"Premium":14999};
  let memberships=[];
  members.forEach((m,i)=>{
    const plan=choice(planTypes);
    const start=randomDate(yearStart,yearEnd);
    const durDays = plan==="Monthly"?30:plan==="Quarterly"?90:365;
    const end=new Date(start.getTime()+durDays*86400000);
    memberships.push({"Membership ID":`MSH${10000+i}`,"Member ID":m["Member ID"],"Plan Type":plan,"Start Date":fmtDate(start),"End Date":fmtDate(end),"Price":localAmount(planPriceINR[plan],market),"Status":choice(["Active","Expired","Cancelled","Frozen"])});
  });
  const classNames=["Yoga Flow","Zumba Blast","HIIT Circuit","Powerlifting","Spin Class","Pilates Core","Boxing Fundamentals"];
  const classCount=referenceTableSize(rowCount, sizeKey, {min:6, max:150, density:0.008});
  let classes=[];
  for(let i=0;i<classCount;i++){
    classes.push({"Class ID":`CLS${100+i}`,"Class Name":choice(classNames),"Trainer ID":choice(trainers)["Trainer ID"],"Day":choice(["Mon","Tue","Wed","Thu","Fri","Sat"]),"Capacity":rand(10,30)});
  }
  let attendance=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const member=choice(members); const cls=choice(classes);
    // Attendance can't predate the member's own join date — previously randomized
    // independently, which could show a member attending a class before they joined.
    const joinDate = new Date(member["Join Date"]);
    const periodEnd = new Date(yearEnd,11,31);
    const date = joinDate < periodEnd ? randomDateBetween(joinDate, periodEnd) : joinDate;
    let row={"Attendance ID":`ATT${100000+i}`,"Member ID":member["Member ID"],"Class ID":cls["Class ID"],"Date":fmtDate(date),"Status":choice(["Attended","No-show","Cancelled"])};
    if(detail!=="basic"){ row["Rating"]=weightedChoice([1,2,3,4,5],[0.03,0.05,0.12,0.35,0.45]); }
    attendance.push(row);
  }
  return {tables:{Members:members,Trainers:trainers,Memberships:memberships,Classes:classes,Attendance:attendance}, mainTable:"Attendance"};
}

async function buildHealthcareSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const networkName = operatorLabel(companyName, "CareWell Health");
  const patCount=coreTableSize(rowCount, 0.3, sizeKey, 50);
  let patients=[];
  for(let i=0;i<patCount;i++){
    patients.push(makePerson("Patient ID","PAT",10000+i,cities,market,{"Age":rand(1,85),"Gender":choice(["Male","Female","Other"])}));
  }
  const clinicCount=referenceTableSize(rowCount, sizeKey, {min:3, max:60, density:0.003});
  let clinics=[];
  for(let i=0;i<clinicCount;i++){
    const [city,state]=choice(cities);
    clinics.push({"Clinic ID":`CLN${10+i}`,"Clinic Name":`${networkName} ${city}`,"City":city,"State":state});
  }
  const specialties=["General Physician","Cardiologist","Dermatologist","Orthopedic","Pediatrician","Gynecologist","ENT Specialist"];
  const docCount=referenceTableSize(rowCount, sizeKey, {min:8, max:200, density:0.006});
  let doctors=[];
  for(let i=0;i<docCount;i++){
    doctors.push({"Doctor ID":`DOC${100+i}`,"Name":`Dr. ${choice(FIRST_NAMES)} ${choice(LAST_NAMES)}`,"Specialty":choice(specialties),"Clinic ID":choice(clinics)["Clinic ID"]});
  }
  const domain=DOMAINS.healthcare;
  const serviceTypes=Object.values(domain.categories).flat();
  let appointments=[]; let billing=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const patient=choice(patients); const doctor=choice(doctors);
    const date=trendDate(yearStart,yearEnd,trendMode);
    const service=choice(serviceTypes);
    const cat = Object.keys(domain.categories).find(c=>domain.categories[c].includes(service));
    const [pMin,pMax]=domain.priceRange[cat];
    const amount=localRand(pMin,pMax,market);
    let row={
      "Appointment ID":`APT${100000+i}`,"Date":fmtDate(date),
      "Patient ID":patient["Patient ID"],"Doctor ID":doctor["Doctor ID"],"Clinic ID":doctor["Clinic ID"],
      "Service Type":service,"Status":choice(domain.status),
    };
    if(detail!=="basic"){ row["Rating"]=weightedChoice([1,2,3,4,5],[0.03,0.05,0.12,0.35,0.45]); }
    appointments.push(row);
    billing.push({"Billing ID":`BIL${100000+i}`,"Appointment ID":row["Appointment ID"],"Amount":amount,"Payment Method":choice(domain.payment),"Payment Status":choice(["Paid","Pending","Refunded"])});
  }
  return {tables:{Patients:patients,Doctors:doctors,Clinics:clinics,Appointments:appointments,Billing:billing}, mainTable:"Appointments"};
}

async function buildBankingSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const bankName = operatorLabel(companyName, "Meridian Bank");
  const custCount=coreTableSize(rowCount, 0.25, sizeKey, 50);
  let customers=[];
  for(let i=0;i<custCount;i++){
    customers.push(makePerson("Customer ID","CUST",10000+i,cities,market));
  }
  const branchCount=referenceTableSize(rowCount, sizeKey, {min:5, max:150, density:0.004});
  let branches=[];
  for(let i=0;i<branchCount;i++){
    const [city,state]=choice(cities);
    branches.push({"Branch ID":`BR${10+i}`,"Branch Name":`${bankName} — ${city}`,"City":city,"State":state});
  }
  let accounts=[];
  const acctTypes=["Savings","Current","Salary"];
  customers.forEach(c=>{
    const numAccts=weightedChoice([1,2],[0.75,0.25]);
    for(let a=0;a<numAccts;a++){
      accounts.push({"Account ID":`ACC${100000+accounts.length}`,"Customer ID":c["Customer ID"],"Branch ID":choice(branches)["Branch ID"],"Account Type":choice(acctTypes),"Balance":localRand(500,500000,market),"Open Date":fmtDate(randomDate(yearStart,yearEnd))});
    }
  });
  const domain=DOMAINS.banking;
  const txnTypes=Object.values(domain.categories).flat();
  let transactions=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const acct=choice(accounts);
    const date=trendDate(yearStart,yearEnd,trendMode);
    const txnType=choice(txnTypes);
    const cat=Object.keys(domain.categories).find(c=>domain.categories[c].includes(txnType));
    const [pMin,pMax]=domain.priceRange[cat];
    const amount=localRand(pMin,pMax,market);
    let row={"Transaction ID":`TXN${1000000+i}`,"Date":fmtDate(date),"Account ID":acct["Account ID"],"Transaction Type":txnType,"Amount":amount,"Status":choice(domain.status)};
    if(detail!=="basic"){ row["Payment Method"]=choice(domain.payment); }
    transactions.push(row);
  }
  const loanTypes=["Home Loan","Personal Loan","Auto Loan","Education Loan"];
  const loanCount=Math.min(customers.length, coreTableSize(rowCount, 0.05, sizeKey, 10));
  let loans=[];
  for(let i=0;i<loanCount;i++){
    const principal=localRand(50000,5000000,market);
    loans.push({"Loan ID":`LN${1000+i}`,"Customer ID":choice(customers)["Customer ID"],"Loan Type":choice(loanTypes),"Principal":principal,"EMI Amount":Math.round(principal/rand(12,60)),"Status":choice(["Active","Closed","Defaulted","Pending Approval"])});
  }
  return {tables:{Customers:customers,Branches:branches,Accounts:accounts,Transactions:transactions,Loans:loans}, mainTable:"Transactions"};
}

async function buildMediaSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const platformName = operatorLabel(companyName, "StreamVerse");
  const planDefs=[["Basic",199],["Standard",499],["Premium",799],["Family",999]];
  let plans=planDefs.map(([name,price],i)=>({"Plan ID":`PLN${10+i}`,"Plan Name":`${platformName} ${name}`,"Price":localAmount(price,market),"Billing Cycle":choice(["Monthly","Annual"])}));
  const subCount=coreTableSize(rowCount, 0.25, sizeKey, 50);
  let subscribers=[];
  for(let i=0;i<subCount;i++){
    subscribers.push(makePerson("Subscriber ID","SUB",10000+i,cities,market,{"Signup Date":fmtDate(randomDate(yearStart,yearEnd)),"Plan ID":choice(plans)["Plan ID"]}));
  }
  const genres=["Drama","Comedy","Action","Documentary","Thriller","Romance","Sci-Fi"];
  const types=["Movie","Series","Documentary"];
  const contentCount=referenceTableSize(rowCount, sizeKey, {min:20, max:800, density:0.02});
  let content=[];
  for(let i=0;i<contentCount;i++){
    content.push({"Content ID":`CNT${1000+i}`,"Title":`Title ${i+1}`,"Genre":choice(genres),"Type":choice(types),"Release Year":rand(2005,2026)});
  }
  const deviceTypes=["Mobile","Smart TV","Laptop","Tablet"];
  let devices=[];
  const devicesBySubscriber = {}; // precomputed lookup — avoids re-filtering devices for every session below
  subscribers.forEach(s=>{
    const numDevices=weightedChoice([1,2,3],[0.5,0.35,0.15]);
    devicesBySubscriber[s["Subscriber ID"]] = [];
    for(let d=0;d<numDevices;d++){
      const dev = {"Device ID":`DEV${100000+devices.length}`,"Subscriber ID":s["Subscriber ID"],"Device Type":choice(deviceTypes)};
      devices.push(dev);
      devicesBySubscriber[s["Subscriber ID"]].push(dev);
    }
  });
  let sessions=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const sub=choice(subscribers); const c=choice(content);
    const subDevices=devicesBySubscriber[sub["Subscriber ID"]];
    const device=(subDevices && subDevices.length)?choice(subDevices):choice(devices);
    // A session can't happen before the subscriber signed up — previously randomized
    // independently, which could show viewing activity predating the subscription.
    const signupDate = new Date(sub["Signup Date"]);
    const periodEnd = new Date(yearEnd,11,31);
    const date = signupDate < periodEnd ? randomDateBetween(signupDate, periodEnd) : signupDate;
    let row={"Session ID":`SES${1000000+i}`,"Date":fmtDate(date),"Subscriber ID":sub["Subscriber ID"],"Content ID":c["Content ID"],"Device ID":device["Device ID"],"Watch Duration (min)":rand(5,180)};
    if(detail!=="basic"){ row["Rating"]=weightedChoice([1,2,3,4,5],[0.03,0.05,0.12,0.35,0.45]); }
    sessions.push(row);
  }
  return {tables:{Subscribers:subscribers,Plans:plans,Content:content,Devices:devices,"Watch Sessions":sessions}, mainTable:"Watch Sessions"};
}

async function buildFashionSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.fashion;
  const retailerName = operatorLabel(companyName, "Northline Retail");
  const custCount = coreTableSize(rowCount, 0.25, sizeKey, 50);
  let customers=[];
  for(let i=0;i<custCount;i++){
    customers.push(makePerson("Customer ID","CUST",10000+i,cities,market));
  }
  const brandAdj=["Urban","Classic","Studio","Luxe","Threadcraft","Vogue","Meridian","Northline"];
  const brandNoun=["Wear","Apparel","Fashion","Co.","Collective","Label","Couture"];
  const brandCount=referenceTableSize(rowCount, sizeKey, {min:6, max:120, density:0.008});
  let brands=[];
  for(let i=0;i<brandCount;i++){
    brands.push({"Brand ID":`BRD${100+i}`,"Brand Name":`${choice(brandAdj)} ${choice(brandNoun)}`,"Country of Origin":choice(["India","USA","Italy","France","China","UK"])});
  }
  const storeCount=referenceTableSize(rowCount, sizeKey, {min:5, max:cities.length, density:0.004});
  let stores=[];
  for(let i=0;i<storeCount;i++){
    const [city,state]=cities[i%cities.length];
    stores.push({"Store ID":`STR${100+i}`,"Store Name":`${retailerName} — ${city}`,"City":city,"State":state,"Store Type":choice(["Flagship","Outlet","Online"])});
  }
  let products=[]; let pid=0;
  Object.keys(domain.categories).forEach(cat=>{
    const [pMin,pMax]=domain.priceRange[cat];
    domain.categories[cat].forEach(name=>{
      products.push({"Product ID":`PRD${1000+pid}`,"Brand ID":choice(brands)["Brand ID"],"Category":cat,"Product Name":name,"Base Price":localRand(pMin,pMax,market)});
      pid++;
    });
  });
  let orders=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const cust=choice(customers); const prod=choice(products); const store=choice(stores);
    const date=trendDate(yearStart,yearEnd,trendMode);
    const variance=0.9+Math.random()*0.2;
    const unitPrice=Math.round(prod["Base Price"]*variance*100)/100;
    const qty=weightedChoice([1,2,3],[0.7,0.22,0.08]);
    const discount=choice([0,0,5,10,15,20,25,0]);
    const finalAmt=Math.round(unitPrice*qty*(1-discount/100)*100)/100;
    let row={"Order ID":`ORD${100000+i}`,"Date":fmtDate(date),"Customer ID":cust["Customer ID"],"Product ID":prod["Product ID"],"Store ID":store["Store ID"],"Quantity":qty,"Unit Price":unitPrice,"Discount (%)":discount,"Final Amount":finalAmt,"Status":choice(domain.status)};
    if(detail!=="basic"){ row["Payment Method"]=choice(domain.payment); row["Rating"]=weightedChoice([1,2,3,4,5],[0.03,0.05,0.12,0.35,0.45]); }
    orders.push(row);
  }
  return {tables:{Customers:customers,Brands:brands,Stores:stores,Products:products,Orders:orders}, mainTable:"Orders"};
}

async function buildFoodSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.food;
  const custCount=coreTableSize(rowCount, 0.25, sizeKey, 50);
  let customers=[];
  for(let i=0;i<custCount;i++){
    customers.push(makePerson("Customer ID","CUST",10000+i,cities,market));
  }
  const restAdj=["Spice","Urban","Royal","Tandoor","Curry","Coastal","Green","Golden"];
  const restNoun=["Kitchen","House","Diner","Bites","Corner","Cafe","Grill"];
  const restCount=referenceTableSize(rowCount, sizeKey, {min:8, max:250, density:0.01});
  let restaurants=[];
  for(let i=0;i<restCount;i++){
    const [city] = choice(cities);
    restaurants.push({"Restaurant ID":`REST${100+i}`,"Restaurant Name":`${choice(restAdj)} ${choice(restNoun)}`,"City":city,"Cuisine":choice(Object.keys(domain.categories))});
  }
  let menuItems=[]; let mid=0;
  Object.keys(domain.categories).forEach(cat=>{
    const [pMin,pMax]=domain.priceRange[cat];
    domain.categories[cat].forEach(name=>{
      menuItems.push({"Item ID":`MENU${1000+mid}`,"Restaurant ID":choice(restaurants)["Restaurant ID"],"Category":cat,"Item Name":name,"Base Price":localRand(pMin,pMax,market)});
      mid++;
    });
  });
  const partnerCount=referenceTableSize(rowCount, sizeKey, {min:10, max:400, density:0.015});
  let partners=[];
  for(let i=0;i<partnerCount;i++){
    const [city]=choice(cities);
    partners.push({"Partner ID":`DP${1000+i}`,"Name":`${choice(FIRST_NAMES)} ${choice(LAST_NAMES)}`,"City":city,"Vehicle Type":choice(["Bike","Scooter","Bicycle","Car"])});
  }
  let orders=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const cust=choice(customers); const item=choice(menuItems); const partner=choice(partners);
    const date=trendDate(yearStart,yearEnd,trendMode);
    const variance=0.9+Math.random()*0.2;
    const unitPrice=Math.round(item["Base Price"]*variance*100)/100;
    const qty=weightedChoice([1,2,3],[0.6,0.3,0.1]);
    const discount=choice([0,0,10,20,0]);
    const finalAmt=Math.round(unitPrice*qty*(1-discount/100)*100)/100;
    let row={"Order ID":`ORD${100000+i}`,"Date":fmtDate(date),"Customer ID":cust["Customer ID"],"Item ID":item["Item ID"],"Restaurant ID":item["Restaurant ID"],"Partner ID":partner["Partner ID"],"Quantity":qty,"Unit Price":unitPrice,"Discount (%)":discount,"Final Amount":finalAmt,"Status":choice(domain.status)};
    if(detail!=="basic"){ row["Payment Method"]=choice(domain.payment); row["Delivery Time (min)"]=rand(15,60); row["Rating"]=weightedChoice([1,2,3,4,5],[0.03,0.05,0.12,0.35,0.45]); }
    orders.push(row);
  }
  return {tables:{Customers:customers,Restaurants:restaurants,"Menu Items":menuItems,"Delivery Partners":partners,Orders:orders}, mainTable:"Orders"};
}

async function buildSaasSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.saas;
  const custCount=coreTableSize(rowCount, 0.3, sizeKey, 50);
  let customers=[];
  for(let i=0;i<custCount;i++){
    customers.push(makePerson("Customer ID","CUST",10000+i,cities,market));
  }
  let plans=[]; let plid=0;
  Object.keys(domain.categories).forEach(cat=>{
    const [pMin,pMax]=domain.priceRange[cat];
    domain.categories[cat].forEach(name=>{
      plans.push({"Plan ID":`PLN${100+plid}`,"Plan Name":`${cat} - ${name}`,"Price":localRand(pMin,pMax,market),"Billing Cycle":name.includes("Annual")?"Annual":"Monthly"});
      plid++;
    });
  });
  const repCount=referenceTableSize(rowCount, sizeKey, {min:4, max:80, density:0.004});
  let reps=[];
  for(let i=0;i<repCount;i++){
    reps.push({"Rep ID":`REP${10+i}`,"Name":`${choice(FIRST_NAMES)} ${choice(LAST_NAMES)}`,"Region":choice(["North","South","East","West","Central"])});
  }
  let subscriptions=[]; let invoices=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const cust=choice(customers); const plan=choice(plans); const rep=choice(reps);
    const start=randomDate(yearStart,yearEnd);
    let subRow={"Subscription ID":`SUB${100000+i}`,"Customer ID":cust["Customer ID"],"Plan ID":plan["Plan ID"],"Rep ID":rep["Rep ID"],"Start Date":fmtDate(start),"Status":choice(["Active","Cancelled","Trial","Past Due"])};
    subscriptions.push(subRow);
    invoices.push({"Invoice ID":`INV${100000+i}`,"Subscription ID":subRow["Subscription ID"],"Date":fmtDate(start),"Amount":plan["Price"],"Payment Method":choice(domain.payment),"Payment Status":choice(["Paid","Pending","Failed"])});
  }
  return {tables:{Customers:customers,Plans:plans,"Sales Reps":reps,Subscriptions:subscriptions,Invoices:invoices}, mainTable:"Subscriptions"};
}

async function buildTravelSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.travel;
  const travCount=coreTableSize(rowCount, 0.3, sizeKey, 50);
  let travelers=[];
  for(let i=0;i<travCount;i++){
    travelers.push(makePerson("Traveler ID","TRV",10000+i,cities,market));
  }
  const [hMin,hMax]=domain.priceRange["Hotels"];
  const hotelCount=referenceTableSize(rowCount, sizeKey, {min:6, max:150, density:0.008});
  let hotels=[];
  for(let i=0;i<hotelCount;i++){
    const [city]=choice(cities);
    hotels.push({"Hotel ID":`HTL${100+i}`,"Hotel Name":`${city} ${choice(["Grand","Plaza","Regency","Suites","Palace"])}`,"City":city,"Star Rating":rand(2,5),"Base Price":localRand(hMin,hMax,market)});
  }
  const [fMin,fMax]=domain.priceRange["Flights"];
  const flightCount=referenceTableSize(rowCount, sizeKey, {min:6, max:150, density:0.008});
  let flights=[];
  const airlines=["IndiGo","Air India","Vistara","SpiceJet","Emirates","British Airways","Lufthansa","Qatar Airways"];
  for(let i=0;i<flightCount;i++){
    const c1=choice(cities)[0]; const c2=choice(cities)[0];
    flights.push({"Flight ID":`FLT${100+i}`,"Airline":choice(airlines),"Route":`${c1} - ${c2}`,"Base Price":localRand(fMin,fMax,market)});
  }
  let bookings=[]; let payments=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const traveler=choice(travelers);
    const type=choice(["Hotel","Flight","Package"]);
    let hotelId="", flightId="", amount=0;
    if(type==="Hotel"){ const h=choice(hotels); hotelId=h["Hotel ID"]; amount=Math.round(h["Base Price"]*(0.9+Math.random()*0.3)*100)/100; }
    else if(type==="Flight"){ const f=choice(flights); flightId=f["Flight ID"]; amount=Math.round(f["Base Price"]*(0.9+Math.random()*0.3)*100)/100; }
    else { const [pMin,pMax]=domain.priceRange["Packages"]; amount=localRand(pMin,pMax,market); }
    const date=trendDate(yearStart,yearEnd,trendMode);
    let row={"Booking ID":`BKG${100000+i}`,"Date":fmtDate(date),"Traveler ID":traveler["Traveler ID"],"Type":type,"Hotel ID":hotelId,"Flight ID":flightId,"Amount":amount,"Status":choice(domain.status)};
    bookings.push(row);
    payments.push({"Payment ID":`PAY${100000+i}`,"Booking ID":row["Booking ID"],"Amount":amount,"Payment Method":choice(domain.payment),"Payment Status":choice(["Paid","Pending","Refunded"])});
  }
  return {tables:{Travelers:travelers,Hotels:hotels,Flights:flights,Bookings:bookings,Payments:payments}, mainTable:"Bookings"};
}

async function buildRealEstateSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.realestate;
  const agencyName = operatorLabel(companyName, "Landmark Realty");
  const clientCount=coreTableSize(rowCount, 0.3, sizeKey, 50);
  let clients=[];
  for(let i=0;i<clientCount;i++){
    clients.push(makePerson("Client ID","CLI",10000+i,cities,market));
  }
  const agentCount=referenceTableSize(rowCount, sizeKey, {min:5, max:150, density:0.006});
  let agents=[];
  for(let i=0;i<agentCount;i++){
    agents.push({"Agent ID":`AGT${100+i}`,"Name":`${choice(FIRST_NAMES)} ${choice(LAST_NAMES)}`,"Agency":agencyName,"City":choice(cities)[0]});
  }
  const localityCount=referenceTableSize(rowCount, sizeKey, {min:5, max:cities.length, density:0.005});
  let localities=[];
  for(let i=0;i<localityCount;i++){
    const [city,state]=cities[i%cities.length];
    localities.push({"Locality ID":`LOC${100+i}`,"Locality Name":`${city} Sector ${rand(1,20)}`,"City":city,"State":state});
  }
  let properties=[]; let prid=0;
  Object.keys(domain.categories).forEach(cat=>{
    const [pMin,pMax]=domain.priceRange[cat];
    domain.categories[cat].forEach(name=>{
      properties.push({"Property ID":`PROP${1000+prid}`,"Locality ID":choice(localities)["Locality ID"],"Property Type":name,"Category":cat,"Price":localRand(pMin,pMax,market)});
      prid++;
    });
  });
  let deals=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const client=choice(clients); const property=choice(properties); const agent=choice(agents);
    const date=trendDate(yearStart,yearEnd,trendMode);
    const amount=Math.round(property["Price"]*(0.95+Math.random()*0.1)*100)/100;
    let row={"Deal ID":`DEAL${100000+i}`,"Date":fmtDate(date),"Client ID":client["Client ID"],"Property ID":property["Property ID"],"Agent ID":agent["Agent ID"],"Deal Type":property["Category"].includes("Rent")?"Rent":"Sale","Amount":amount,"Status":choice(domain.status)};
    deals.push(row);
  }
  return {tables:{Clients:clients,Agents:agents,Properties:properties,Localities:localities,Deals:deals}, mainTable:"Deals"};
}

async function buildEducationSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.education;
  const instituteName = operatorLabel(companyName, "BrightPath Academy");
  const studentCount=coreTableSize(rowCount, 0.3, sizeKey, 50);
  let students=[];
  for(let i=0;i<studentCount;i++){
    students.push(makePerson("Student ID","STU",10000+i,cities,market));
  }
  const subjects=["Mathematics","Science","Computer Science","Business","Design","Languages","Test Prep"];
  const instCount=referenceTableSize(rowCount, sizeKey, {min:5, max:150, density:0.006});
  let instructors=[];
  for(let i=0;i<instCount;i++){
    instructors.push({"Instructor ID":`INS${100+i}`,"Name":`${choice(FIRST_NAMES)} ${choice(LAST_NAMES)}`,"Institute":instituteName,"Subject":choice(subjects)});
  }
  let courses=[]; let cid=0;
  Object.keys(domain.categories).forEach(cat=>{
    const [pMin,pMax]=domain.priceRange[cat];
    domain.categories[cat].forEach(name=>{
      courses.push({"Course ID":`CRS${1000+cid}`,"Instructor ID":choice(instructors)["Instructor ID"],"Category":cat,"Course Name":name,"Price":localRand(pMin,pMax,market)});
      cid++;
    });
  });
  let enrollments=[]; let payments=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const student=choice(students); const course=choice(courses);
    const date=trendDate(yearStart,yearEnd,trendMode);
    let row={"Enrollment ID":`ENR${100000+i}`,"Date":fmtDate(date),"Student ID":student["Student ID"],"Course ID":course["Course ID"],"Status":choice(domain.status),"Progress (%)":rand(0,100)};
    enrollments.push(row);
    payments.push({"Payment ID":`PAY${100000+i}`,"Enrollment ID":row["Enrollment ID"],"Amount":course["Price"],"Payment Method":choice(domain.payment),"Payment Status":choice(["Paid","Pending","Refunded"])});
  }
  return {tables:{Students:students,Instructors:instructors,Courses:courses,Enrollments:enrollments,Payments:payments}, mainTable:"Enrollments"};
}

async function buildTelecomSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.telecom;
  const providerName = operatorLabel(companyName, "Airwave Telecom");
  const subCount=coreTableSize(rowCount, 0.3, sizeKey, 50);
  let subscribers=[];
  for(let i=0;i<subCount;i++){
    subscribers.push(makePerson("Subscriber ID","SUB",10000+i,cities,market));
  }
  let plans=[]; let plid=0;
  Object.keys(domain.categories).forEach(cat=>{
    const [pMin,pMax]=domain.priceRange[cat];
    domain.categories[cat].forEach(name=>{
      plans.push({"Plan ID":`PLN${100+plid}`,"Plan Name":`${providerName} ${name}`,"Category":cat,"Price":localRand(pMin,pMax,market),"Validity (days)":choice([1,28,84,365])});
      plid++;
    });
  });
  const circleCount=referenceTableSize(rowCount, sizeKey, {min:4, max:40, density:0.003});
  let circles=[];
  const usedStates=new Set();
  cities.forEach(c=>usedStates.add(c[1]));
  const stateArr=[...usedStates];
  for(let i=0;i<circleCount;i++){
    circles.push({"Circle ID":`CIR${10+i}`,"Circle Name":stateArr[i%stateArr.length],"Region":choice(["North","South","East","West"])});
  }
  let recharges=[]; let complaints=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const sub=choice(subscribers); const plan=choice(plans); const circle=choice(circles);
    const date=trendDate(yearStart,yearEnd,trendMode);
    let row={"Recharge ID":`RCH${100000+i}`,"Date":fmtDate(date),"Subscriber ID":sub["Subscriber ID"],"Plan ID":plan["Plan ID"],"Circle ID":circle["Circle ID"],"Amount":plan["Price"],"Payment Method":choice(domain.payment),"Status":choice(domain.status)};
    recharges.push(row);
  }
  const complaintCount=coreTableSize(rowCount, 0.08, sizeKey, 1);
  for(let i=0;i<complaintCount;i++){
    complaints.push({"Complaint ID":`CMP${1000+i}`,"Subscriber ID":choice(subscribers)["Subscriber ID"],"Date":fmtDate(randomDate(yearStart,yearEnd)),"Issue Type":choice(["Network Issue","Billing Dispute","Recharge Failed","SIM Activation","Data Not Working"]),"Status":choice(["Open","Resolved","Escalated"])});
  }
  return {tables:{Subscribers:subscribers,Plans:plans,Circles:circles,Recharges:recharges,Complaints:complaints}, mainTable:"Recharges"};
}

async function buildLogisticsSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.logistics;
  const carrierName = operatorLabel(companyName, "SwiftHaul Logistics");
  const clientCount=coreTableSize(rowCount, 0.25, sizeKey, 50);
  let clients=[];
  for(let i=0;i<clientCount;i++){
    clients.push(makePerson("Client ID","CLI",10000+i,cities,market));
  }
  const driverCount=referenceTableSize(rowCount, sizeKey, {min:10, max:400, density:0.01});
  let drivers=[];
  for(let i=0;i<driverCount;i++){
    const [city]=choice(cities);
    drivers.push({"Driver ID":`DRV${1000+i}`,"Name":`${choice(FIRST_NAMES)} ${choice(LAST_NAMES)}`,"Employer":carrierName,"City":city,"Vehicle Type":choice(["Van","Truck","Bike","Mini Truck"])});
  }
  const whCount=referenceTableSize(rowCount, sizeKey, {min:5, max:cities.length, density:0.004});
  let warehouses=[];
  for(let i=0;i<whCount;i++){
    const [city,state]=cities[i%cities.length];
    warehouses.push({"Warehouse ID":`WH${100+i}`,"City":city,"State":state});
  }
  let shipments=[]; let events=[];
  const eventStages=["Picked Up","In Transit","Out for Delivery","Delivered","Delayed"];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const client=choice(clients); const driver=choice(drivers); const wh=choice(warehouses);
    const date=trendDate(yearStart,yearEnd,trendMode);
    const cat=choice(Object.keys(domain.categories));
    const [pMin,pMax]=domain.priceRange[cat];
    const amount=localRand(pMin,pMax,market);
    let row={"Shipment ID":`SHP${100000+i}`,"Date":fmtDate(date),"Client ID":client["Client ID"],"Driver ID":driver["Driver ID"],"Warehouse ID":wh["Warehouse ID"],"Weight (kg)":rand(1,50),"Amount":amount,"Status":choice(domain.status)};
    shipments.push(row);
    // Delivery events must happen ON OR AFTER the shipment date, in stage order —
    // previously these were independently randomized and could show a "Delivered" event
    // before the shipment was even created.
    const numEvents=rand(1,3);
    let eventDate = new Date(date.getTime());
    for(let e=0;e<numEvents;e++){
      eventDate = new Date(eventDate.getTime() + rand(0,3)*86400000);
      events.push({"Event ID":`EVT${1000000+events.length}`,"Shipment ID":row["Shipment ID"],"Event Date":fmtDate(eventDate),"Event Status":eventStages[Math.min(e,eventStages.length-1)]});
    }
  }
  return {tables:{Clients:clients,Drivers:drivers,Warehouses:warehouses,Shipments:shipments,"Delivery Events":events}, mainTable:"Shipments"};
}

async function buildAutomotiveSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.automotive;
  const custCount=coreTableSize(rowCount, 0.3, sizeKey);
  let customers=[];
  for(let i=0;i<custCount;i++){
    customers.push(makePerson("Customer ID","CUST",10000+i,cities,market));
  }
  // Automotive is a single-operator (dealership) business model: every showroom belongs
  // to the user's own Company Name, not a directory of competing manufacturers.
  const brandName = operatorLabel(companyName, "AutoDrive Motors");
  const showroomCount = referenceTableSize(rowCount, sizeKey, {min:3, max:Math.min(40,cities.length), density:0.005});
  let showrooms=[];
  for(let i=0;i<showroomCount;i++){
    const city=cities[i%cities.length][0];
    showrooms.push({"Showroom ID":`SHR${100+i}`,"City":city,"Brand":brandName});
  }
  const [vMin,vMax]=domain.priceRange["Vehicle Sales"];
  let vehicles=[];
  domain.categories["Vehicle Sales"].forEach((name,i)=>{
    vehicles.push({"Vehicle ID":`VEH${100+i}`,"Showroom ID":choice(showrooms)["Showroom ID"],"Model":`${brandName} ${name}`,"Type":name.toLowerCase().includes("wheeler")?"Two-wheeler":"Four-wheeler","Price":localRand(vMin,vMax,market)});
  });
  let bookings=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const customer=choice(customers); const vehicle=choice(vehicles);
    const date=trendDate(yearStart,yearEnd,trendMode);
    const amount=Math.round(vehicle["Price"]*(0.97+Math.random()*0.06)*100)/100;
    // showroom must match the vehicle's actual showroom — not an independent random pick —
    // otherwise a booking could reference a showroom that doesn't stock that vehicle.
    let row={"Booking ID":`BKG${100000+i}`,"Date":fmtDate(date),"Customer ID":customer["Customer ID"],"Vehicle ID":vehicle["Vehicle ID"],"Showroom ID":vehicle["Showroom ID"],"Amount":amount,"Status":choice(domain.status)};
    bookings.push(row);
  }
  const [sMin,sMax]=domain.priceRange["Service"];
  let serviceRecords=[];
  const serviceCount=coreTableSize(rowCount, 0.4, sizeKey, 1);
  for(let i=0;i<serviceCount;i++){
    serviceRecords.push({"Service ID":`SVC${100000+i}`,"Customer ID":choice(customers)["Customer ID"],"Vehicle ID":choice(vehicles)["Vehicle ID"],"Date":fmtDate(randomDate(yearStart,yearEnd)),"Service Type":choice(domain.categories["Service"]),"Amount":localRand(sMin,sMax,market)});
  }
  return {tables:{Customers:customers,Showrooms:showrooms,Vehicles:vehicles,Bookings:bookings,"Service Records":serviceRecords}, mainTable:"Bookings"};
}

async function buildAgricultureSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.agriculture;
  const farmerCount=coreTableSize(rowCount, 0.05, sizeKey, 20);
  let farmers=[];
  for(let i=0;i<farmerCount;i++){
    const p = makePerson("Farmer ID","FRM",1000+i,cities,market);
    p["Village/City"] = p["City"]; delete p["City"];
    farmers.push(p);
  }
  const buyerCount=referenceTableSize(rowCount, sizeKey, {min:10, max:300, density:0.02});
  let buyers=[];
  for(let i=0;i<buyerCount;i++){
    const [city]=choice(cities);
    buyers.push({"Buyer ID":`BUY${1000+i}`,"Name":`${choice(FIRST_NAMES)} ${choice(LAST_NAMES)}`,"City":city});
  }
  const mandiCount=referenceTableSize(rowCount, sizeKey, {min:5, max:80, density:0.005});
  let mandis=[];
  for(let i=0;i<mandiCount;i++){
    const [city,state]=choice(cities);
    mandis.push({"Mandi ID":`MND${10+i}`,"Mandi Name":`${city} Mandi`,"City":city,"State":state});
  }
  let cropSales=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const farmer=choice(farmers); const buyer=choice(buyers); const mandi=choice(mandis);
    const date=trendDate(yearStart,yearEnd,trendMode);
    const cat=choice(Object.keys(domain.categories));
    const crop=choice(domain.categories[cat]);
    const [pMin,pMax]=domain.priceRange[cat];
    const amount=localRand(pMin,pMax,market);
    let row={"Sale ID":`SAL${100000+i}`,"Date":fmtDate(date),"Farmer ID":farmer["Farmer ID"],"Buyer ID":buyer["Buyer ID"],"Mandi ID":mandi["Mandi ID"],"Crop Type":crop,"Quantity (Quintal)":rand(1,100),"Amount":amount,"Status":choice(domain.status)};
    cropSales.push(row);
  }
  const [eMin,eMax]=domain.priceRange["Equipment"];
  let rentals=[];
  const rentalCount=coreTableSize(rowCount, 0.15, sizeKey, 1);
  for(let i=0;i<rentalCount;i++){
    rentals.push({"Rental ID":`RNT${10000+i}`,"Farmer ID":choice(farmers)["Farmer ID"],"Equipment Type":choice(domain.categories["Equipment"]),"Date":fmtDate(randomDate(yearStart,yearEnd)),"Amount":localRand(eMin,eMax,market)});
  }
  return {tables:{Farmers:farmers,Buyers:buyers,Mandis:mandis,"Crop Sales":cropSales,"Equipment Rentals":rentals}, mainTable:"Crop Sales"};
}

async function buildEventsSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.hospitality_events;
  const clientCount=coreTableSize(rowCount, 0.3, sizeKey, 50);
  let clients=[];
  for(let i=0;i<clientCount;i++){
    clients.push(makePerson("Client ID","CLI",10000+i,cities,market));
  }
  const [venMin,venMax]=domain.priceRange["Venue Booking"];
  const venueCount=referenceTableSize(rowCount, sizeKey, {min:6, max:150, density:0.006});
  let venues=[];
  for(let i=0;i<venueCount;i++){
    const [city]=choice(cities);
    venues.push({"Venue ID":`VEN${100+i}`,"Venue Name":choice(domain.categories["Venue Booking"]),"City":city,"Capacity":rand(50,1000),"Base Price":localRand(venMin,venMax,market)});
  }
  const vendorCount=referenceTableSize(rowCount, sizeKey, {min:8, max:200, density:0.008});
  let vendors=[];
  for(let i=0;i<vendorCount;i++){
    vendors.push({"Vendor ID":`VND${100+i}`,"Vendor Name":`${choice(FIRST_NAMES)}${choice(LAST_NAMES)} ${choice(["Events","Productions","Studio"])}`,"Service Type":choice(domain.categories["Vendors"])});
  }
  let bookings=[]; let guestLists=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const client=choice(clients); const venue=choice(venues);
    const date=trendDate(yearStart,yearEnd,trendMode);
    const amount=Math.round(venue["Base Price"]*(0.9+Math.random()*0.3)*100)/100;
    let row={"Booking ID":`BKG${100000+i}`,"Date":fmtDate(date),"Client ID":client["Client ID"],"Venue ID":venue["Venue ID"],"Event Type":choice(["Wedding","Corporate Event","Birthday Party","Conference","Concert"]),"Amount":amount,"Status":choice(domain.status)};
    bookings.push(row);
    const guestCount=rand(2,6);
    for(let g=0;g<guestCount;g++){
      guestLists.push({"Guest ID":`GST${1000000+guestLists.length}`,"Booking ID":row["Booking ID"],"Guest Name":`${choice(FIRST_NAMES)} ${choice(LAST_NAMES)}`,"RSVP Status":choice(["Confirmed","Pending","Declined"])});
    }
  }
  return {tables:{Clients:clients,Venues:venues,Vendors:vendors,Bookings:bookings,"Guest Lists":guestLists}, mainTable:"Bookings"};
}

async function buildSalonSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.beauty_salon;
  const chainName = operatorLabel(companyName, "Glow & Co Salon");
  const custCount=coreTableSize(rowCount, 0.3, sizeKey, 50);
  let customers=[];
  for(let i=0;i<custCount;i++){
    customers.push(makePerson("Customer ID","CUST",10000+i,cities,market));
  }
  const stylistCount=referenceTableSize(rowCount, sizeKey, {min:5, max:150, density:0.006});
  let stylists=[];
  for(let i=0;i<stylistCount;i++){
    stylists.push({"Stylist ID":`STY${100+i}`,"Name":`${choice(FIRST_NAMES)} ${choice(LAST_NAMES)}`,"Salon":chainName,"Specialty":choice(["Hair","Skin","Nails","Makeup"])});
  }
  let services=[]; let sid=0;
  Object.keys(domain.categories).forEach(cat=>{
    if(cat==="Products") return;
    const [pMin,pMax]=domain.priceRange[cat];
    domain.categories[cat].forEach(name=>{
      services.push({"Service ID":`SVC${100+sid}`,"Category":cat,"Service Name":name,"Price":localRand(pMin,pMax,market)});
      sid++;
    });
  });
  let appointments=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const customer=choice(customers); const stylist=choice(stylists); const service=choice(services);
    const date=trendDate(yearStart,yearEnd,trendMode);
    const amount=Math.round(service["Price"]*(0.95+Math.random()*0.1)*100)/100;
    let row={"Appointment ID":`APT${100000+i}`,"Date":fmtDate(date),"Customer ID":customer["Customer ID"],"Stylist ID":stylist["Stylist ID"],"Service ID":service["Service ID"],"Amount":amount,"Status":choice(domain.status)};
    if(detail!=="basic"){ row["Rating"]=weightedChoice([1,2,3,4,5],[0.03,0.05,0.12,0.35,0.45]); }
    appointments.push(row);
  }
  const [prMin,prMax]=domain.priceRange["Products"];
  let products=[];
  domain.categories["Products"].forEach((name,i)=>{
    products.push({"Product ID":`PRD${100+i}`,"Product Name":name,"Price":localRand(prMin,prMax,market),"Stock":rand(5,200)});
  });
  return {tables:{Customers:customers,Stylists:stylists,Services:services,Appointments:appointments,Products:products}, mainTable:"Appointments"};
}

async function buildB2BSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode){
  const domain = DOMAINS.b2b_wholesale;
  const buyerCount=coreTableSize(rowCount, 0.25, sizeKey, 50);
  let buyers=[];
  for(let i=0;i<buyerCount;i++){
    const [city,state]=choice(cities);
    buyers.push({"Buyer ID":`BUY${10000+i}`,"Name":`${choice(FIRST_NAMES)}${choice(LAST_NAMES)} ${choice(["Enterprises","Industries","Traders","Corp"])}`,"City":city,"State":state});
  }
  const supplierCount=referenceTableSize(rowCount, sizeKey, {min:8, max:200, density:0.008});
  let suppliers=[];
  for(let i=0;i<supplierCount;i++){
    const [city]=choice(cities);
    suppliers.push({"Supplier ID":`SUP${100+i}`,"Supplier Name":`${choice(["Global","National","Prime","United"])} ${choice(["Supply Co.","Manufacturing","Distributors"])}`,"City":city});
  }
  const whCount=referenceTableSize(rowCount, sizeKey, {min:5, max:cities.length, density:0.004});
  let warehouses=[];
  for(let i=0;i<whCount;i++){
    const [city,state]=cities[i%cities.length];
    warehouses.push({"Warehouse ID":`WH${100+i}`,"City":city,"State":state});
  }
  let purchaseOrders=[]; let shipments=[];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const buyer=choice(buyers); const supplier=choice(suppliers); const wh=choice(warehouses);
    const date=trendDate(yearStart,yearEnd,trendMode);
    const cat=choice(Object.keys(domain.categories));
    const [pMin,pMax]=domain.priceRange[cat];
    const amount=localRand(pMin,pMax,market);
    let row={"PO ID":`PO${100000+i}`,"Date":fmtDate(date),"Buyer ID":buyer["Buyer ID"],"Supplier ID":supplier["Supplier ID"],"Category":cat,"Amount":amount,"Status":choice(domain.status)};
    purchaseOrders.push(row);
    // Ship date must be on/after the PO date — previously randomized independently,
    // which could produce a shipment dated before its own purchase order.
    const shipDate = new Date(date.getTime() + rand(1,14)*86400000);
    shipments.push({"Shipment ID":`SHP${100000+i}`,"PO ID":row["PO ID"],"Warehouse ID":wh["Warehouse ID"],"Ship Date":fmtDate(shipDate),"Status":choice(["Pending","Shipped","Delivered","Delayed"])});
  }
  return {tables:{Buyers:buyers,Suppliers:suppliers,Warehouses:warehouses,"Purchase Orders":purchaseOrders,Shipments:shipments}, mainTable:"Purchase Orders"};
}

async function buildCustomRelational(domainKey, rowCount, detail, cities, yearStart, yearEnd, messiness, market, companyName, sizeKey, trendMode){
  let result;
  switch(domainKey){
    case "ecommerce": result = await buildEcommerceSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "fitness": result = await buildFitnessSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "healthcare": result = await buildHealthcareSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "banking": result = await buildBankingSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "media": result = await buildMediaSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "fashion": result = await buildFashionSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "food": result = await buildFoodSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "saas": result = await buildSaasSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "travel": result = await buildTravelSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "realestate": result = await buildRealEstateSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "education": result = await buildEducationSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "telecom": result = await buildTelecomSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "logistics": result = await buildLogisticsSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "automotive": result = await buildAutomotiveSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "agriculture": result = await buildAgricultureSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "hospitality_events": result = await buildEventsSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "beauty_salon": result = await buildSalonSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    case "b2b_wholesale": result = await buildB2BSchema(rowCount, detail, cities, yearStart, yearEnd, market, companyName, sizeKey, trendMode); break;
    default: {
      const domain = DOMAINS[domainKey];
      const generic = await buildRelationalDataset(domainKey, domain, cities, rowCount, detail, yearStart, yearEnd, 0, market, companyName, sizeKey, trendMode);
      result = { tables: {
        [generic.schema.peopleLabel]: generic.people,
        [generic.schema.catalogLabel]: generic.catalog,
        [generic.schema.staffLabel]: generic.staff,
        [generic.schema.locationLabel]: generic.locations,
        [generic.schema.transactionLabel]: generic.transactions,
      }, mainTable: generic.schema.transactionLabel };
    }
  }
  result.issues = applyGenericMessiness(result.tables, result.mainTable, messiness, market);
  return result;
}

async function generateDataset(){
  const company = document.getElementById('companyName').value.trim() || "Demo Co";
  const domainKey = document.getElementById('domain').value;
  const market = document.getElementById('market').value;
  const rowCount = Math.min(10000000, Math.max(100, parseInt(document.getElementById('rowCount').value) || 1000));
  const detail = document.getElementById('detail').value;
  const yearStart = parseInt(document.getElementById('yearStart').value);
  const yearEnd = parseInt(document.getElementById('yearEnd').value);
  const messiness = parseInt(document.getElementById('messiness').value);
  const trendModeEl = document.getElementById('trendMode');
  const trendMode = trendModeEl ? trendModeEl.value : 'none';

  const domain = DOMAINS[domainKey];
  const cities = CITIES[market];
  const catNames = Object.keys(domain.categories);

  let rows = [];
  for(let i=0;i<rowCount;i++){
    if(i>0 && i%50000===0) await yieldToUI();
    const cat = choice(catNames);
    const product = choice(domain.categories[cat]);
    const [city,state] = choice(cities);
    const name = `${choice(FIRST_NAMES)} ${choice(LAST_NAMES)}`;
    const date = trendDate(yearStart,yearEnd,trendMode);
    const festiveBoost = (date.getMonth()===9 || date.getMonth()===10) ? 1.4 : 1.0;
    const [pMin,pMax] = domain.priceRange[cat];
    const unitPrice = localRand(pMin,pMax,market);
    const qty = weightedChoice([1,2,3],[0.7,0.22,0.08]);
    const discount = choice([0,0,5,10,15,20,25,0]);
    const gross = unitPrice*qty*festiveBoost;
    const finalAmt = Math.round(gross*(1-discount/100)*100)/100;
    const rating = weightedChoice([1,2,3,4,5],[0.03,0.05,0.12,0.35,0.45]);

    let row = {
      "Record ID": `${domain.idPrefix}${100000+i}`,
      "Date": fmtDate(date),
      "Company": company,
      "Category": cat,
      "Product / Plan": product,
      "Quantity": qty,
      "Unit Price": unitPrice,
      "Discount (%)": discount,
      "Final Amount": finalAmt,
      "Status": choice(domain.status),
    };
    if(detail!=="basic"){
      row = Object.assign({
        "Record ID": row["Record ID"], "Date": row["Date"], "Company": row["Company"],
        "Customer Name": name, "City": city, "State": state,
        "Category": row["Category"], "Product / Plan": row["Product / Plan"],
        "Quantity": row["Quantity"], "Unit Price": row["Unit Price"], "Discount (%)": row["Discount (%)"],
        "Final Amount": row["Final Amount"], "Payment Method": choice(domain.payment),
        "Status": row["Status"], "Rating": rating,
      });
    }
    if(detail==="verydetailed"){
      row["Delivery / Fulfillment Days"] = rand(1,10);
      row["Profit Margin (%)"] = rand(5,40);
    }
    rows.push(row);
  }

  // ---- inject messiness proportional to dial ----
  let issues = 0;
  if(messiness>0){
    const frac = messiness/100;
    const cityKey = detail==="basic" ? null : "City";
    const catKey = "Category";

    // 1. city casing/whitespace
    if(cityKey){
      const n = Math.round(rowCount*frac*0.12);
      for(let k=0;k<n;k++){
        const idx = rand(0,rows.length-1);
        const c = rows[idx][cityKey];
        const opt = choice(["upper","lower","space"]);
        rows[idx][cityKey] = opt==="upper"?c.toUpperCase():opt==="lower"?c.toLowerCase():` ${c} `;
        issues++;
      }
    }
    // 2. category typos/casing
    { const n = Math.round(rowCount*frac*0.08);
      for(let k=0;k<n;k++){
        const idx = rand(0,rows.length-1);
        const c = rows[idx][catKey];
        rows[idx][catKey] = Math.random()<0.5 ? c.toLowerCase() : `${c} `;
        issues++;
      }
    }
    // 3. missing values across a few columns
    const missCols = detail==="basic" ? ["Discount (%)","Status"] : ["Rating","Payment Method","Discount (%)"];
    missCols.forEach(col=>{
      const n = Math.round(rowCount*frac*0.06);
      for(let k=0;k<n;k++){
        const idx = rand(0,rows.length-1);
        if(col in rows[idx]){ rows[idx][col] = ""; issues++; }
      }
    });
    // 4. text placeholder nulls in State
    if(detail!=="basic" && rows[0]["State"]!==undefined){
      const n = Math.round(rowCount*frac*0.015);
      for(let k=0;k<n;k++){
        const idx = rand(0,rows.length-1);
        rows[idx]["State"] = choice(["N/A","-","Unknown","n/a"]);
        issues++;
      }
    }
    // 5. inconsistent date formats
    { const n = Math.round(rowCount*frac*0.10);
      for(let k=0;k<n;k++){
        const idx = rand(0,rows.length-1);
        const parts = rows[idx]["Date"].split("-");
        const fmt = choice(["dmy-dash","dmy-slash","mdy-slash"]);
        if(fmt==="dmy-dash") rows[idx]["Date"] = `${parts[2]}-${parts[1]}-${parts[0]}`;
        else if(fmt==="dmy-slash") rows[idx]["Date"] = `${parts[2]}/${parts[1]}/${parts[0]}`;
        else rows[idx]["Date"] = `${parts[1]}/${parts[2]}/${parts[0]}`;
        issues++;
      }
    }
    // 6. duplicate rows
    { const n = Math.round(rowCount*frac*0.02);
      for(let k=0;k<n;k++){
        rows.push(Object.assign({}, rows[rand(0,rows.length-1)]));
        issues++;
      }
    }
    // 7. outliers
    { const n = Math.max(1, Math.round(20*frac));
      for(let k=0;k<n;k++){
        const idx = rand(0,rows.length-1);
        rows[idx]["Final Amount"] = Math.round(rows[idx]["Final Amount"]*10*100)/100;
        issues++;
      }
    }
    // shuffle
    for(let i=rows.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [rows[i],rows[j]]=[rows[j],rows[i]];
    }
  }

  generatedIssues = issues;
  return rows;
}

function miniTable(rows, limit){
  if(!rows.length) return '<p style="color:var(--muted);">No rows.</p>';
  const cols = Object.keys(rows[0]);
  let html = '<div class="table-wrap" style="max-height:260px;"><table><thead><tr>';
  cols.forEach(c=> html += `<th>${c}</th>`);
  html += '</tr></thead><tbody>';
  rows.slice(0,limit).forEach(r=>{
    html += '<tr>';
    cols.forEach(c=> html += `<td>${r[c]===""?'<span style="color:#d9645a">(blank)</span>':r[c]}</td>`);
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  return html;
}

function renderRelationalPreview(data){
  const mainRows = data.tables[data.mainTable] || [];
  document.getElementById('statRows').textContent = mainRows.length.toLocaleString();
  document.getElementById('statCols').textContent = `${Object.keys(data.tables).length} tables`;
  document.getElementById('statIssues').textContent = data.issues.toLocaleString();
  document.getElementById('stats').style.display = 'flex';

  let html = '';
  Object.entries(data.tables).forEach(([name, rows])=>{
    html += `<h3 style="font-family:'IBM Plex Mono',monospace;color:var(--amber);font-size:14px;margin:18px 0 8px;">${name} (${rows.length.toLocaleString()})</h3>`;
    html += miniTable(rows, 15);
  });
  html += `<p style="color:var(--muted);font-family:'IBM Plex Mono',monospace;font-size:12px;margin-top:10px;">Tables are linked by ID columns — join them in Power BI/Excel to build the full picture.</p>`;
  document.getElementById('tableArea').innerHTML = html;
}

function renderPreview(rows){
  const cols = Object.keys(rows[0]);
  document.getElementById('statRows').textContent = rows.length.toLocaleString();
  document.getElementById('statCols').textContent = cols.length;
  document.getElementById('statIssues').textContent = generatedIssues.toLocaleString();
  document.getElementById('stats').style.display = 'flex';

  let html = '<div class="table-wrap"><table><thead><tr>';
  cols.forEach(c=> html += `<th>${c}</th>`);
  html += '</tr></thead><tbody>';
  rows.slice(0,50).forEach(r=>{
    html += '<tr>';
    cols.forEach(c=> html += `<td>${r[c]===""?'<span style="color:#d9645a">(blank)</span>':r[c]}</td>`);
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  html += `<p style="color:var(--muted);font-family:'IBM Plex Mono',monospace;font-size:12px;margin-top:10px;">Showing first 50 of ${rows.length.toLocaleString()} rows.</p>`;
  document.getElementById('tableArea').innerHTML = html;
}

document.getElementById('messiness').addEventListener('input', (e)=>{
  const v = parseInt(e.target.value);
  const label = v===0?"Pristine (clean)": v<30?"Light mess": v<70?"Realistic mess":"Total chaos";
  document.getElementById('messinessLabel').textContent = label;
  const offset = 267 - (v/100)*267;
  document.getElementById('gaugeArc').style.strokeDashoffset = offset;
  const angle = -90 + (v/100)*180;
  document.getElementById('needle').style.transform = `rotate(${angle}deg)`;
});

function setGeneratingState(isGenerating, message){
  const btn = document.getElementById('generateBtn');
  const dlBtn = document.getElementById('downloadBtn');
  const inputs = document.querySelectorAll('.config input, .config select, .config button');
  inputs.forEach(el=>{ if(el!==btn) el.disabled = isGenerating || (el===dlBtn && !generatedData); });
  btn.disabled = isGenerating;
  btn.textContent = isGenerating ? (message || "Generating...") : "Generate preview";
}

const MAX_ROWS = 5000000; // 50 lakh — realistic ceiling for in-browser generation + export

document.getElementById('generateBtn').addEventListener('click', async ()=>{
  const rawInput = parseInt(document.getElementById('rowCount').value) || 1000;
  if(rawInput > MAX_ROWS){
    alert(`Row count capped at ${MAX_ROWS.toLocaleString()} (50 lakh) — this is the realistic ceiling for generating and exporting data inside a browser tab. Generating ${MAX_ROWS.toLocaleString()} rows instead.`);
  }
  const rowCount = Math.min(MAX_ROWS, Math.max(100, rawInput));
  const format = document.getElementById('fileFormat').value;
  if(format === 'xlsx' && rowCount > 1000000){
    alert(`Heads up: Excel files can hold a maximum of 10,48,576 rows per sheet (a hard limit of the .xlsx format itself). With ${rowCount.toLocaleString()} rows, switch File Format to CSV before downloading, or this export will be blocked.`);
  }
  if(rowCount > 1000000){
    const proceed = confirm(`Generating ${rowCount.toLocaleString()} rows is a large job — it will take real time and use significant browser memory, though the tab should stay responsive. Continue?`);
    if(!proceed) return;
  }

  setGeneratingState(true, "Generating...");
  await new Promise(res=>setTimeout(res,20)); // let the button repaint before heavy work starts
  const t0 = performance.now();
  try{
    const structure = document.getElementById('structure').value;
    const companyName = document.getElementById('companyName').value.trim();
    const sizeKey = getCompanySize();
    if(structure === "relational"){
      const domainKey = document.getElementById('domain').value;
      const market = document.getElementById('market').value;
      const detail = document.getElementById('detail').value;
      const yearStart = parseInt(document.getElementById('yearStart').value);
      const yearEnd = parseInt(document.getElementById('yearEnd').value);
      const messiness = parseInt(document.getElementById('messiness').value);
      const trendMode = document.getElementById('trendMode').value;
      const cities = CITIES[market];
      generatedData = await buildCustomRelational(domainKey, rowCount, detail, cities, yearStart, yearEnd, messiness, market, companyName, sizeKey, trendMode);
      generatedIssues = generatedData.issues;
      renderRelationalPreview(generatedData);
    } else {
      generatedData = await generateDataset();
      renderPreview(generatedData);
    }
    const elapsed = ((performance.now()-t0)/1000).toFixed(1);
    document.getElementById('genTime').textContent = `Generated in ${elapsed}s`;
  } catch(err){
    console.error(err);
    alert("Generation failed — likely out of browser memory for this row count. Try a smaller number of rows, or generate in the 'Single flat table' structure which uses less memory per row.");
  } finally {
    setGeneratingState(false);
  }
});

const EXCEL_MAX_ROWS = 1048576 - 10; // leave headroom below Excel's hard sheet limit

function setDownloadingState(isDownloading, message){
  const btn = document.getElementById('downloadBtn');
  const genBtn = document.getElementById('generateBtn');
  btn.disabled = isDownloading;
  genBtn.disabled = isDownloading;
  btn.textContent = isDownloading ? (message || "Downloading...") : "Download dataset";
}

document.getElementById('downloadBtn').addEventListener('click', async ()=>{
  if(!generatedData) return;
  const company = document.getElementById('companyName').value.trim() || "Demo Co";
  const safeName = company.replace(/[^a-z0-9]/gi,'_');
  const structure = document.getElementById('structure').value;
  const format = document.getElementById('fileFormat').value;
  const isRelational = structure === "relational";
  const marketKey = document.getElementById('market').value;
  const cfg = MARKET_CONFIG[marketKey] || MARKET_CONFIG.generic;
  const domainKey = document.getElementById('domain').value;
  const kpiList = getKpiSuggestions(domainKey);

  // Excel (.xlsx) has a hard limit of 1,048,576 rows per sheet — this is a file-format
  // limit, not something we can raise. Catch it up front with a clear message instead
  // of letting the export silently hang or fail deep inside the library.
  if(format === "xlsx"){
    const tableSizes = isRelational
      ? Object.entries(generatedData.tables).map(([n,r])=>[n,r.length])
      : [["Raw Data", generatedData.length]];
    const oversized = tableSizes.filter(([,len])=>len > EXCEL_MAX_ROWS);
    if(oversized.length){
      alert(
        `Excel files can hold a maximum of 10,48,576 rows per sheet — this is a hard limit of the .xlsx format itself, not something the tool controls.\n\n` +
        oversized.map(([n,len])=>`• ${n}: ${len.toLocaleString()} rows (over the limit)`).join('\n') +
        `\n\nPlease switch File Format to CSV for datasets this large — CSV has no row limit and exports much faster.`
      );
      return;
    }
  }

  setDownloadingState(true, "Preparing...");
  await new Promise(res=>setTimeout(res,20)); // let the button repaint before heavy work starts

  try{

  // Lightweight data dictionary: for each table, note its primary key (first "...ID" column)
  // and any other ID columns, which are foreign keys into another table's primary key.
  const relationshipLines = [];
  if(isRelational){
    Object.entries(generatedData.tables).forEach(([name, rows])=>{
      if(!rows.length) return;
      const cols = Object.keys(rows[0]);
      const idCols = cols.filter(c=>/ id$/i.test(c));
      const pk = idCols[0];
      const fks = idCols.slice(1);
      relationshipLines.push(`- ${name}: primary key = ${pk || "(none)"}${fks.length ? "; foreign keys = " + fks.join(", ") : ""}`);
    });
  }

  const readmeLines = [
    `${company} — Synthetic Practice Dataset`,
    "",
    "This is 100% synthetic data generated for data cleaning and Power BI / Excel practice.",
    "It does NOT represent real company data, customers, or transactions.",
    "",
    `Market: ${document.getElementById('market').selectedOptions[0].text} — monetary fields are scaled to realistic ${cfg.currency} amounts (no currency symbol embedded in the numbers).`,
    "",
    isRelational
      ? `Structure: relational (${Object.keys(generatedData.tables).join(", ")}). ` + Object.entries(generatedData.tables).map(([n,r])=>`${n}: ${r.length}`).join(", ") + "."
      : `Structure: single flat table. Rows: ${generatedData.length}.`,
    `Planted data issues: ${generatedIssues}`,
    "",
    "Depending on the realism dial setting, this dataset may include:",
    "- Inconsistent text casing/whitespace in city and category fields",
    "- Missing values in several columns",
    "- Text placeholders instead of blanks (N/A, -, Unknown)",
    "- Mixed date formats within the same column",
    "- Duplicate rows",
    "- A few outlier values (inflated amounts)",
    "",
    "Suggested cleaning exercises: standardize text fields, unify date formats,",
    "handle missing values, remove duplicates, and detect outliers (IQR or z-score).",
    "",
  ];
  if(relationshipLines.length){
    readmeLines.push("Table relationships (for SQL joins / Power BI model view):");
    readmeLines.push(...relationshipLines);
    readmeLines.push("");
  }
  readmeLines.push("Suggested Power BI measures / starting KPIs for this industry:");
  kpiList.forEach(k=>readmeLines.push(`- ${k}`));

  if(format === "xlsx"){
    const wb = XLSX.utils.book_new();
    const wsNotes = XLSX.utils.aoa_to_sheet(readmeLines.map(l=>[l]));
    wsNotes['!cols'] = [{wch:90}];
    XLSX.utils.book_append_sheet(wb, wsNotes, "README");

    const kpiRows = [["Suggested Power BI Measure / KPI"], ...kpiList.map(k=>[k])];
    const wsKpi = XLSX.utils.aoa_to_sheet(kpiRows);
    wsKpi['!cols'] = [{wch:80}];
    XLSX.utils.book_append_sheet(wb, wsKpi, "Suggested KPIs");

    if(isRelational){
      const entries = Object.entries(generatedData.tables);
      for(let i=0;i<entries.length;i++){
        const [name, rows] = entries[i];
        setDownloadingState(true, `Building ${name}...`);
        await new Promise(res=>setTimeout(res,0));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), name.substring(0,31));
      }
    } else {
      setDownloadingState(true, "Building sheet...");
      await new Promise(res=>setTimeout(res,0));
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(generatedData), "Raw Data");
    }
    setDownloadingState(true, "Writing file...");
    await new Promise(res=>setTimeout(res,0));
    XLSX.writeFile(wb, `${safeName}_synthetic_data.xlsx`);
  } else {
    // CSV format — built via the chunked, yielding builder so large exports don't freeze the tab
    if(isRelational){
      const zip = new JSZip();
      zip.file("README.txt", readmeLines.join("\n"));
      const entries = Object.entries(generatedData.tables);
      for(let i=0;i<entries.length;i++){
        const [name, rows] = entries[i];
        const csv = await toCSVChunked(rows, (done,total)=>{
          setDownloadingState(true, `${name}: ${Math.round(done/total*100)}%`);
        });
        zip.file(`${name.replace(/[^a-z0-9]/gi,'_')}.csv`, csv);
      }
      setDownloadingState(true, "Zipping...");
      const blob = await zip.generateAsync({type:"blob"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `${safeName}_synthetic_data.zip`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      const csv = await toCSVChunked(generatedData, (done,total)=>{
        setDownloadingState(true, `Building CSV: ${Math.round(done/total*100)}%`);
      });
      const blob = new Blob([csv], {type:"text/csv;charset=utf-8;"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `${safeName}_synthetic_data.csv`;
      a.click();
      URL.revokeObjectURL(url);
    }
  }

  } catch(err){
    console.error(err);
    alert("Download failed — likely ran out of browser memory for this dataset size. Try a smaller row count, or export as CSV instead of Excel.");
  } finally {
    setDownloadingState(false);
  }
});

document.getElementById('saveConfigBtn').addEventListener('click', ()=>{
  const config = {
    companyName: document.getElementById('companyName').value,
    domain: document.getElementById('domain').value,
    market: document.getElementById('market').value,
    rowCount: document.getElementById('rowCount').value,
    detail: document.getElementById('detail').value,
    yearStart: document.getElementById('yearStart').value,
    yearEnd: document.getElementById('yearEnd').value,
    messiness: document.getElementById('messiness').value,
    structure: document.getElementById('structure').value,
    fileFormat: document.getElementById('fileFormat').value,
  };
  const blob = new Blob([JSON.stringify(config, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeName = (config.companyName || "ledger").replace(/[^a-z0-9]/gi,'_');
  a.href = url; a.download = `${safeName}_settings.json`;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('loadConfigBtn').addEventListener('click', ()=>{
  document.getElementById('configFileInput').click();
});

document.getElementById('configFileInput').addEventListener('change', (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (evt)=>{
    try{
      const config = JSON.parse(evt.target.result);
      if(config.companyName!==undefined) document.getElementById('companyName').value = config.companyName;
      if(config.domain) document.getElementById('domain').value = config.domain;
      if(config.market) document.getElementById('market').value = config.market;
      if(config.rowCount) document.getElementById('rowCount').value = config.rowCount;
      if(config.detail) document.getElementById('detail').value = config.detail;
      if(config.yearStart) document.getElementById('yearStart').value = config.yearStart;
      if(config.yearEnd) document.getElementById('yearEnd').value = config.yearEnd;
      if(config.structure) document.getElementById('structure').value = config.structure;
      if(config.fileFormat) document.getElementById('fileFormat').value = config.fileFormat;
      if(config.messiness!==undefined){
        document.getElementById('messiness').value = config.messiness;
        document.getElementById('messiness').dispatchEvent(new Event('input'));
      }
    } catch(err){
      alert("Couldn't read that settings file. Please make sure it's a valid .json exported from this tool.");
    }
  };
  reader.readAsText(file);
  e.target.value = "";
});
