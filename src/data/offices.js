// Real NC DMV office data sourced from NCDOT
// Operational metrics (visitors, wait times, satisfaction) are simulated
// as live data is not publicly available via API

export const offices = [
  // Wake County
  { city: "Raleigh", county: "Wake", address: "1251 Buck Jones Road", phone: "(919) 469-1444" },
  { city: "Raleigh", county: "Wake", address: "3231 Avent Ferry Road", phone: "(919) 816-9197" },
  { city: "Raleigh", county: "Wake", address: "Lane and Wilmington Streets", phone: "(919) 218-6250" },
  { city: "Garner", county: "Wake", address: "222 Forest Hills Drive", phone: "(919) 662-4366" },
  { city: "Wake Forest", county: "Wake", address: "2012 S. Main St. Suite 504", phone: "(919) 554-0770" },
  { city: "Wake Forest", county: "Wake", address: "405 Brooks Street", phone: "(919) 302-9828" },
  { city: "Fuquay Varina", county: "Wake", address: "131 S. Fuquay Ave.", phone: "(919) 552-9043" },
  { city: "Zebulon", county: "Wake", address: "815 N. Arendell Ave.", phone: "(919) 269-0117" },
  // Mecklenburg County
  { city: "Charlotte", county: "Mecklenburg", address: "5622 E. Independence Blvd.", phone: "(704) 535-2525" },
  { city: "Charlotte", county: "Mecklenburg", address: "809 E. Arrowood Road, Suite 800", phone: "(704) 525-3832" },
  { city: "Charlotte", county: "Mecklenburg", address: "6635 Executive Circle Suite 130", phone: "(704) 531-5563" },
  { city: "Charlotte", county: "Mecklenburg", address: "201-H W. Arrowood Road", phone: "(704) 527-2562" },
  { city: "Charlotte", county: "Mecklenburg", address: "8446 N. Tryon St.", phone: "(704) 547-5782" },
  { city: "Huntersville", county: "Mecklenburg", address: "12101 Mt. Holly-Huntersville Road", phone: "(704) 331-4500" },
  // Guilford County
  { city: "Greensboro", county: "Guilford", address: "2527 E. Market St.", phone: "(336) 334-5745" },
  { city: "Greensboro", county: "Guilford", address: "2391 Coliseum Blvd.", phone: "(336) 334-5438" },
  { city: "Greensboro", county: "Guilford", address: "5551 W. Market St.", phone: "(336) 856-1510" },
  { city: "Greensboro", county: "Guilford", address: "2218 Golden Gate Dr", phone: "(336) 275-7715" },
  { city: "High Point", county: "Guilford", address: "650 Francis St.", phone: "(336) 884-1003" },
  { city: "High Point", county: "Guilford", address: "1677 Westchester Drive, Suite 155", phone: "(336) 889-8247" },
  // Forsyth County
  { city: "Winston-Salem", county: "Forsyth", address: "3637 N. Patterson Ave.", phone: "(336) 761-2286" },
  { city: "Winston-Salem", county: "Forsyth", address: "2001 Silas Creek Parkway", phone: "(336) 761-2258" },
  { city: "Winston-Salem", county: "Forsyth", address: "1141 Silas Creek Parkway", phone: "(336) 725-2795" },
  { city: "Winston-Salem", county: "Forsyth", address: "470 West Hanes Mill Road", phone: "(336) 767-8808" },
  { city: "Kernersville", county: "Forsyth", address: "1325 E. Highway 66 S.", phone: "(336) 993-5226" },
  { city: "Kernersville", county: "Forsyth", address: "810A N. Main St.", phone: "(336) 993-5651" },
  { city: "Rural Hall", county: "Forsyth", address: "1014 NC Highway 65", phone: "(336) 969-2814" },
  // Cumberland County
  { city: "Fayetteville", county: "Cumberland", address: "2439 Gillespie St.", phone: "(910) 486-1353" },
  { city: "Fayetteville", county: "Cumberland", address: "841 Elm St.", phone: "(910) 484-6249" },
  { city: "Fayetteville", county: "Cumberland", address: "831A Elm St.", phone: "(910) 486-1331" },
  { city: "Fayetteville", county: "Cumberland", address: "4705 Clinton Road", phone: "(910) 483-3096" },
  { city: "Hope Mills", county: "Cumberland", address: "3333 North Main Street, Suite 140", phone: "(910) 424-2500" },
  { city: "Spring Lake", county: "Cumberland", address: "316C NC Highway 210 N", phone: "(910) 497-3707" },
  // Robeson County
  { city: "Lumberton", county: "Robeson", address: "2479 E. Fifth St.", phone: "(910) 618-5527" },
  { city: "Lumberton", county: "Robeson", address: "220 N. Chestnut St.", phone: "(910) 738-2732" },
  { city: "Lumberton", county: "Robeson", address: "4650 Kahn Drive", phone: "(910) 618-5551" },
  { city: "Lumberton", county: "Robeson", address: "4850 Fayetteville Road", phone: "(910) 618-5742" },
  { city: "Pembroke", county: "Robeson", address: "100 S. Union Chapel Road", phone: "(910) 521-8617" },
  { city: "Saint Pauls", county: "Robeson", address: "210 W. Blue St.", phone: "(910) 865-1332" },
  { city: "Red Springs", county: "Robeson", address: "218 S. Main St.", phone: "(910) 843-2471" },
  { city: "Fairmont", county: "Robeson", address: "103 Cottage St.", phone: "(910) 628-9766" },
  // Harnett County
  { city: "Lillington", county: "Harnett", address: "1190 N. Main St.", phone: "(910) 893-8388" },
  { city: "Lillington", county: "Harnett", address: "1005 Edwards Drive", phone: "(910) 893-8939" },
  { city: "Dunn", county: "Harnett", address: "110 N. Orange Ave.", phone: "(910) 892-1456" },
  { city: "Dunn", county: "Harnett", address: "128 N. Clinton St.", phone: "(910) 892-6324" },
  { city: "Angier", county: "Harnett", address: "18 E. Depot St.", phone: "(919) 639-9900" },
  { city: "Erwin", county: "Harnett", address: "125 W. Jackson Blvd.", phone: "(910) 892-1456" },
  // Davidson County
  { city: "Lexington", county: "Davidson", address: "27 Plaza Parkway", phone: "(336) 248-2720" },
  { city: "Lexington", county: "Davidson", address: "2314 S. Main St.", phone: "(336) 248-5179" },
  { city: "Lexington", county: "Davidson", address: "106 Alma Owens Dr", phone: "(336) 242-9529" },
  { city: "Denton", county: "Davidson", address: "18639 S. Highway 109", phone: "(336) 859-4332" },
  { city: "Thomasville", county: "Davidson", address: "1033 Randolph St. Suite 13", phone: "(336) 476-5070" },
  // Catawba County
  { city: "Newton", county: "Catawba", address: "1033 Smyre Farm Road", phone: "(828) 466-5511" },
  { city: "Newton", county: "Catawba", address: "803 West Conover Boulevard", phone: "(828) 464-6878" },
  { city: "Hickory", county: "Catawba", address: "1158 Lenoir-Rhyne Blvd. S.E.", phone: "(828) 326-9126" },
  { city: "Hickory", county: "Catawba", address: "901 U.S. 321 N.", phone: "(828) 328-3783" },
  // Wayne County
  { city: "Goldsboro", county: "Wayne", address: "701 W. Grantham St.", phone: "(919) 731-7963" },
  { city: "Goldsboro", county: "Wayne", address: "511 N. William St.", phone: "(919) 734-0881" },
  { city: "Mount Olive", county: "Wayne", address: "110 N. Chestnut St.", phone: "(919) 658-3942" },
  { city: "Mount Olive", county: "Wayne", address: "1130-E N. Breazeale Ave.", phone: "(919) 658-9921" },
];

// Aggregate office counts by county for chart data
export const officesByCounty = offices.reduce((acc, office) => {
  const key = office.county;
  if (!acc[key]) acc[key] = { county: key, count: 0, offices: [] };
  acc[key].count++;
  acc[key].offices.push(office);
  return acc;
}, {});

// Top 5 counties by office count, with simulated operational metrics
// NOTE: visitors, avgWait, satisfaction, staff, available are simulated —
// real-time data is not publicly accessible via NCDOT API.
export const branchData = [
  {
    name: "Charlotte / Mecklenburg",
    county: "Mecklenburg",
    officeCount: offices.filter(o => o.county === "Mecklenburg").length,
    visitors: 324,
    avgWait: 28,
    satisfaction: 4.2,
    staff: 12,
    available: 8,
  },
  {
    name: "Raleigh / Wake",
    county: "Wake",
    officeCount: offices.filter(o => o.county === "Wake").length,
    visitors: 289,
    avgWait: 22,
    satisfaction: 4.3,
    staff: 10,
    available: 7,
  },
  {
    name: "Greensboro / Guilford",
    county: "Guilford",
    officeCount: offices.filter(o => o.county === "Guilford").length,
    visitors: 198,
    avgWait: 25,
    satisfaction: 4.1,
    staff: 8,
    available: 5,
  },
  {
    name: "Winston-Salem / Forsyth",
    county: "Forsyth",
    officeCount: offices.filter(o => o.county === "Forsyth").length,
    visitors: 176,
    avgWait: 19,
    satisfaction: 4.3,
    staff: 8,
    available: 6,
  },
  {
    name: "Fayetteville / Cumberland",
    county: "Cumberland",
    officeCount: offices.filter(o => o.county === "Cumberland").length,
    visitors: 156,
    avgWait: 24,
    satisfaction: 4.0,
    staff: 7,
    available: 5,
  },
];
