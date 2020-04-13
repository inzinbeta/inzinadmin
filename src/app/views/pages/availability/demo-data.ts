
export interface Bank {
    id: string;
    name: string;
  }
  
 
  
  /** list of banks */
  export const BANKS: Bank[] = [{name:"Anantapur",id:"Anantapur"},{name:"Chittoor",id:"Chittoor"},{name:"East Goda vari",id:"East Godavari"},{name:"Guntur",id:"Guntur"},{name:"Krishna",id:"Krishna"} ,{name:"Kurnool",id:"Kurnool"},{name:"Nellore",id:"Nellore"},{name:"Prakasam",id: "Prakasam"},{name:"Srikakulam",id:"Srikakulam"},{name:"Visakhapatnam",id:"Visakhapatn am"},{name:"Vizianagaram",id:"Vizianagaram"},{name:"West Godavari",id:"West Godavari" },{name:"YSR Kadapa",id:"YSR Kadapa"},{name:"Tawang",id:"Tawang"},{name:"West Kamen g",id:"West Kameng"},{name:"East Kameng",id:"East Kameng"},{name:"Papum Pare",id:"P apum Pare"},{name:"Kurung Kumey",id:"Kurung Kumey"},{name:"Kra Daadi",id:"Kra Daadi"} ,{name:"Lower Subansiri",id:"Lower Subansiri"},{name:"Upper Subansiri",id:"Upper Suba nsiri"},{name:"West Siang",id:"West Siang"},{name:"East Siang",id:"East Siang"},{name:"Siang",id:"Siang"},{name:"Upper Siang",id:"Upper Siang"},{name:"Lower Siang",id :"Lower Siang"},{name:"Lower Dibang Valley",id:"Lower Dibang Valley"},{name:"Dibang Val ley",id:"Dibang Valley"},{name:"Anjaw",id:"Anjaw"},{name:"Lohit",id:"Lohit"},{name:"Namsai",id:"Namsai"},{name:"Changlang",id:"Changlang"},{name:"Tirap",id:"Tirap"} ,{name:"Longding",id:"Longding"},{name:"Baksa",id:"Baksa"},{name:"Barpeta",id:"Ba rpeta"},{name:"Biswanath",id:"Biswanath"},{name:"Bongaigaon",id:"Bongaigaon"},{name :"Cachar",id:"Cachar"},{name:"Charaideo",id:"Charaideo"},{name:"Chirang",id:"Chiran g"},{name:"Darrang",id:"Darrang"},{name:"Dhemaji",id:"Dhemaji"},{name:"Dhubri",id :"Dhubri"},{name:"Dibrugarh",id:"Dibrugarh"},{name:"Goalpara",id:"Goalpara"},{name: "Golaghat",id:"Golaghat"},{name:"Hailakandi",id:"Hailakandi"},{name:"Hojai",id:"Hoj ai"},{name:"Jorhat",id:"Jorhat"},{name:"Kamrup Metropolitan",id:"Kamrup Metropolitan" },{name:"Kamrup",id:"Kamrup"},{name:"Karbi Anglong",id:"Karbi Anglong"},{name:"Kari mganj",id:"Karimganj"},{name:"Kokrajhar",id:"Kokrajhar"},{name:"Lakhimpur",id:"Lakh impur"},{name:"Majuli",id:"Majuli"},{name:"Morigaon",id:"Morigaon"},{name:"Nagaon", id:"Nagaon"},{name:"Nalbari",id:"Nalbari"},{name:"Dima Hasao",id:"Dima Hasao"},{name:"Sivasagar",id:"Sivasagar"},{name:"Sonitpur",id:"Sonitpur"},{name:"South Salmara- Mankachar",id:"South Salmara-Mankachar"},{name:"Tinsukia",id:"Tinsukia"},{name:"Udalg uri",id:"Udalguri"},{name:"West Karbi Anglong",id:"West Karbi Anglong"},{name:"Araria ",id:"Araria"},{name:"Arwal",id:"Arwal"},{name:"Aurangabad",id:"Aurangabad"},{name:"Banka",id:"Banka"},{name:"Begusarai",id:"Begusarai"},{name:"Bhagalpur",id:"Bhaga lpur"},{name:"Bhojpur",id:"Bhojpur"},{name:"Buxar",id:"Buxar"},{name:"Darbhanga",id:"Darbhanga"},{name:"East Champaran (Motihari)",id:"East Champaran (Motihari)"},{name :"Gaya",id:"Gaya"},{name:"Gopalganj",id:"Gopalganj"},{name:"Jamui",id:"Jamui"},{name:"Jehanabad",id:"Jehanabad"},{name:"Kaimur (Bhabua)",id:"Kaimur (Bhabua)"},{name:" Katihar",id:"Katihar"},{name:"Khagaria",id:"Khagaria"},{name:"Kishanganj",id:"Kisha nganj"},{name:"Lakhisarai",id:"Lakhisarai"},{name:"Madhepura",id:"Madhepura"},{name :"Madhubani",id:"Madhubani"},{name:"Munger (Monghyr)",id:"Munger (Monghyr)"},{name:"M uzaffarpur",id:"Muzaffarpur"},{name:"Nalanda",id:"Nalanda"},{name:"Nawada",id:"Nawa da"},{name:"Patna",id:"Patna"},{name:"Purnia (Purnea)",id:"Purnia (Purnea)"},{name: "Rohtas",id:"Rohtas"},{name:"Saharsa",id:"Saharsa"},{name:"Samastipur",id:"Samastip ur"},{name:"Saran",id:"Saran"},{name:"Sheikhpura",id:"Sheikhpura"},{name:"Sheohar", id:"Sheohar"},{name:"Sitamarhi",id:"Sitamarhi"},{name:"Siwan",id:"Siwan"},{name:" Supaul",id:"Supaul"},{name:"Vaishali",id:"Vaishali"},{name:"West Champaran",id:"Wes t Champaran"},{name:"Chandigarh",id:"Chandigarh"},{name:"Balod",id:"Balod"},{name:" Baloda Bazar",id:"Baloda Bazar"},{name:"Balrampur",id:"Balrampur"},{name:"Bastar",id:"Bastar"},{name:"Bemetara",id:"Bemetara"},{name:"Bijapur",id:"Bijapur"},{name:"Bi laspur",id:"Bilaspur"},{name:"Dantewada (South Bastar)",id:"Dantewada (South Bastar)"}, {name:"Dhamtari",id:"Dhamtari"},{name:"Durg",id:"Durg"},{name:"Gariyaband",id:"Gariyaband"},{name:"Janjgir-Champa",id:"Janjgir-Champa"},{name:"Jashpur",id:"Jashpur"},{name:"Kabirdham (Kawardha)",id:"Kabirdham (Kawardha)"},{name:"Kanker (North Bastar)",id:"Kanker (North Bastar)"},{name:"Kondagaon",id:"Kondagaon"},{name:"Korba",id:"Korba"},{name:"Korea (Koriya)",id:"Korea (Koriya)"},{name:"Mahasamund",id:"Mahasamund"},{name:"Mungeli",id:"Mungeli"},{name:"Narayanpur",id:"Narayanpur"},{name:"Raigarh",id:"Raigarh"},{name:"Raipur",id:"Raipur"},{name:"Rajnandgaon",id:"Rajnandgaon"},{name:"Sukma",id:"Sukma"},{name:"Surajpur ",id:"Surajpur "},{name:"Surguja",id:"Surguja"},{name:"Dadra & Nagar Haveli",id:"Dadra & Nagar Haveli"},{name:"Daman",id:"Daman"},{name:"Diu",id:"Diu"},{name:"Central Delhi",id:"Central Delhi"},{name:"East Delhi",id:"East Delhi"},{name:"New Delhi",id:"New Delhi"},{name:"North Delhi",id:"North Delhi"},{name:"North East Delhi",id:"North East Delhi"},{name:"North West Delhi",id:"North West Delhi"},{name:"Shahdara",id:"Shahdara"},{name:"South Delhi",id:"South Delhi"},{name:"South East Delhi",id:"South East Delhi"},{name:"South West Delhi",id:"South West Delhi"},{name:"West Delhi",id:"West Delhi"},{name:"North Goa",id:"North Goa"},{name:"South Goa",id:"South Goa"},{name:"Ahmedabad",id:"Ahmedabad"},{name:"Amreli",id:"Amreli"},{name:"Anand",id:"Anand"},{name:"Aravalli",id:"Aravalli"},{name:"Banaskantha (Palanpur)",id:"Banaskantha (Palanpur)"},{name:"Bharuch",id:"Bharuch"},{name:"Bhavnagar",id:"Bhavnagar"},{name:"Botad",id:"Botad"},{name:"Chhota Udepur",id:"Chhota Udepur"},{name:"Dahod",id:"Dahod"},{name:"Dangs (Ahwa)",id:"Dangs (Ahwa)"},{name:"Devbhoomi Dwarka",id:"Devbhoomi Dwarka"},{name:"Gandhinagar",id:"Gandhinagar"},{name:"Gir Somnath",id:"Gir Somnath"},{name:"Jamnagar",id:"Jamnagar"},{name:"Junagadh",id:"Junagadh"},{name:"Kachchh",id:"Kachchh"},{name:"Kheda (Nadiad)",id:"Kheda (Nadiad)"},{name:"Mahisagar",id:"Mahisagar"},{name:"Mehsana",id:"Mehsana"},{name:"Morbi",id:"Morbi"},{name:"Narmada (Rajpipla)",id:"Narmada (Rajpipla)"},{name:"Navsari",id:"Navsari"},{name:"Panchmahal (Godhra)",id:"Panchmahal (Godhra)"},{name:"Patan",id:"Patan"},{name:"Porbandar",id:"Porbandar"},{name:"Rajkot",id:"Rajkot"},{name:"Sabarkantha (Himmatnagar)",id:"Sabarkantha (Himmatnagar)"},{name:"Surat",id:"Surat"},{name:"Surendranagar",id:"Surendranagar"},{name:"Tapi (Vyara)",id:"Tapi (Vyara)"},{name:"Vadodara",id:"Vadodara"},{name:"Valsad",id:"Valsad"},{name:"Ambala",id:"Ambala"},{name:"Bhiwani",id:"Bhiwani"},{name:"Charkhi Dadri",id:"Charkhi Dadri"},{name:"Faridabad",id:"Faridabad"},{name:"Fatehabad",id:"Fatehabad"},{name:"Gurgaon",id:"Gurgaon"},{name:"Hisar",id:"Hisar"},{name:"Jhajjar",id:"Jhajjar"},{name:"Jind",id:"Jind"},{name:"Kaithal",id:"Kaithal"},{name:"Karnal",id:"Karnal"},{name:"Kurukshetra",id:"Kurukshetra"},{name:"Mahendragarh",id:"Mahendragarh"},{name:"Mewat",id:"Mewat"},{name:"Palwal",id:"Palwal"},{name:"Panchkula",id:"Panchkula"},{name:"Panipat",id:"Panipat"},{name:"Rewari",id:"Rewari"},{name:"Rohtak",id:"Rohtak"},{name:"Sirsa",id:"Sirsa"},{name:"Sonipat",id:"Sonipat"},{name:"Yamunanagar",id:"Yamunanagar"},{name:"Bilaspur",id:"Bilaspur"},{name:"Chamba",id:"Chamba"},{name:"Hamirpur",id:"Hamirpur"},{name:"Kangra",id:"Kangra"},{name:"Kinnaur",id:"Kinnaur"},{name:"Kullu",id:"Kullu"},{name:"Lahaul &amp; Spiti",id:"Lahaul &amp; Spiti"},{name:"Mandi",id:"Mandi"},{name:"Shimla",id:"Shimla"},{name:"Sirmaur (Sirmour)",id:"Sirmaur (Sirmour)"},{name:"Solan",id:"Solan"},{name:"Una",id:"Una"},{name:"Anantnag",id:"Anantnag"},{name:"Bandipore",id:"Bandipore"},{name:"Baramulla",id:"Baramulla"},{name:"Budgam",id:"Budgam"},{name:"Doda",id:"Doda"},{name:"Ganderbal",id:"Ganderbal"},{name:"Jammu",id:"Jammu"},{name:"Kargil",id:"Kargil"},{name:"Kathua",id:"Kathua"},{name:"Kishtwar",id:"Kishtwar"},{name:"Kulgam",id:"Kulgam"},{name:"Kupwara",id:"Kupwara"},{name:"Leh",id:"Leh"},{name:"Poonch",id:"Poonch"},{name:"Pulwama",id:"Pulwama"},{name:"Rajouri",id:"Rajouri"},{name:"Ramban",id:"Ramban"},{name:"Reasi",id:"Reasi"},{name:"Samba",id:"Samba"},{name:"Shopian",id:"Shopian"},{name:"Srinagar",id:"Srinagar"},{name:"Udhampur",id:"Udhampur"},{name:"Bokaro",id:"Bokaro"},{name:"Chatra",id:"Chatra"},{name:"Deoghar",id:"Deoghar"},{name:"Dhanbad",id:"Dhanbad"},{name:"Dumka",id:"Dumka"},{name:"East Singhbhum",id:"East Singhbhum"},{name:"Garhwa",id:"Garhwa"},{name:"Giridih",id:"Giridih"},{name:"Godda",id:"Godda"},{name:"Gumla",id:"Gumla"},{name:"Hazaribag",id:"Hazaribag"},{name:"Jamtara",id:"Jamtara"},{name:"Khunti",id:"Khunti"},{name:"Koderma",id:"Koderma"},{name:"Latehar",id:"Latehar"},{name:"Lohardaga",id:"Lohardaga"},{name:"Pakur",id:"Pakur"},{name:"Palamu",id:"Palamu"},{name:"Ramgarh",id:"Ramgarh"},{name:"Ranchi",id:"Ranchi"},{name:"Sahibganj",id:"Sahibganj"},{name:"Seraikela-Kharsawan",id:"Seraikela-Kharsawan"},{name:"Simdega",id:"Simdega"},{name:"West Singhbhum",id:"West Singhbhum"},{name:"Bagalkot",id:"Bagalkot"},{name:"Ballari (Bellary)",id:"Ballari (Bellary)"},{name:"Belagavi (Belgaum)",id:"Belagavi (Belgaum)"},{name:"Bengaluru (Bangalore) Rural",id:"Bengaluru (Bangalore) Rural"},{name:"Bengaluru (Bangalore) Urban",id:"Bengaluru (Bangalore) Urban"},{name:"Bidar",id:"Bidar"},{name:"Chamarajanagar",id:"Chamarajanagar"},{name:"Chikballapur",id:"Chikballapur"},{name:"Chikkamagaluru (Chikmagalur)",id:"Chikkamagaluru (Chikmagalur)"},{name:"Chitradurga",id:"Chitradurga"},{name:"Dakshina Kannada",id:"Dakshina Kannada"},{name:"Davangere",id:"Davangere"},{name:"Dharwad",id:"Dharwad"},{name:"Gadag",id:"Gadag"},{name:"Hassan",id:"Hassan"},{name:"Haveri",id:"Haveri"},{name:"Kalaburagi (Gulbarga)",id:"Kalaburagi (Gulbarga)"},{name:"Kodagu",id:"Kodagu"},{name:"Kolar",id:"Kolar"},{name:"Koppal",id:"Koppal"},{name:"Mandya",id:"Mandya"},{name:"Mysuru (Mysore)",id:"Mysuru (Mysore)"},{name:"Raichur",id:"Raichur"},{name:"Ramanagara",id:"Ramanagara"},{name:"Shivamogga (Shimoga)",id:"Shivamogga (Shimoga)"},{name:"Tumakuru (Tumkur)",id:"Tumakuru (Tumkur)"},{name:"Udupi",id:"Udupi"},{name:"Uttara Kannada (Karwar)",id:"Uttara Kannada (Karwar)"},{name:"Vijayapura (Bijapur)",id:"Vijayapura (Bijapur)"},{name:"Yadgir",id:"Yadgir"},{name:"Alappuzha",id:"Alappuzha"},{name:"Ernakulam",id:"Ernakulam"},{name:"Idukki",id:"Idukki"},{name:"Kannur",id:"Kannur"},{name:"Kasaragod",id:"Kasaragod"},{name:"Kollam",id:"Kollam"},{name:"Kottayam",id:"Kottayam"},{name:"Kozhikode",id:"Kozhikode"},{name:"Malappuram",id:"Malappuram"},{name:"Palakkad",id:"Palakkad"},{name:"Pathanamthitta",id:"Pathanamthitta"},{name:"Thiruvananthapuram",id:"Thiruvananthapuram"},{name:"Thrissur",id:"Thrissur"},{name:"Wayanad",id:"Wayanad"},{name:"Agatti",id:"Agatti"},{name:"Amini",id:"Amini"},{name:"Androth",id:"Androth"},{name:"Bithra",id:"Bithra"},{name:"Chethlath",id:"Chethlath"},{name:"Kavaratti",id:"Kavaratti"},{name:"Kadmath",id:"Kadmath"},{name:"Kalpeni",id:"Kalpeni"},{name:"Kilthan",id:"Kilthan"},{name:"Minicoy",id:"Minicoy"},{name:"Agar Malwa",id:"Agar Malwa"},{name:"Alirajpur",id:"Alirajpur"},{name:"Anuppur",id:"Anuppur"},{name:"Ashoknagar",id:"Ashoknagar"},{name:"Balaghat",id:"Balaghat"},{name:"Barwani",id:"Barwani"},{name:"Betul",id:"Betul"},{name:"Bhind",id:"Bhind"},{name:"Bhopal",id:"Bhopal"},{name:"Burhanpur",id:"Burhanpur"},{name:"Chhatarpur",id:"Chhatarpur"},{name:"Chhindwara",id:"Chhindwara"},{name:"Damoh",id:"Damoh"},{name:"Datia",id:"Datia"},{name:"Dewas",id:"Dewas"},{name:"Dhar",id:"Dhar"},{name:"Dindori",id:"Dindori"},{name:"Guna",id:"Guna"},{name:"Gwalior",id:"Gwalior"},{name:"Harda",id:"Harda"},{name:"Hoshangabad",id:"Hoshangabad"},{name:"Indore",id:"Indore"},{name:"Jabalpur",id:"Jabalpur"},{name:"Jhabua",id:"Jhabua"},{name:"Katni",id:"Katni"},{name:"Khandwa",id:"Khandwa"},{name:"Khargone",id:"Khargone"},{name:"Mandla",id:"Mandla"},{name:"Mandsaur",id:"Mandsaur"},{name:"Morena",id:"Morena"},{name:"Narsinghpur",id:"Narsinghpur"},{name:"Neemuch",id:"Neemuch"},{name:"Panna",id:"Panna"},{name:"Raisen",id:"Raisen"},{name:"Rajgarh",id:"Rajgarh"},{name:"Ratlam",id:"Ratlam"},{name:"Rewa",id:"Rewa"},{name:"Sagar",id:"Sagar"},{name:"Satna",id:"Satna"},{name:"Sehore",id:"Sehore"},{name:"Seoni",id:"Seoni"},{name:"Shahdol",id:"Shahdol"},{name:"Shajapur",id:"Shajapur"},{name:"Sheopur",id:"Sheopur"},{name:"Shivpuri",id:"Shivpuri"},{name:"Sidhi",id:"Sidhi"},{name:"Singrauli",id:"Singrauli"},{name:"Tikamgarh",id:"Tikamgarh"},{name:"Ujjain",id:"Ujjain"},{name:"Umaria",id:"Umaria"},{name:"Vidisha",id:"Vidisha"},{name:"Ahmednagar",id:"Ahmednagar"},{name:"Akola",id:"Akola"},{name:"Amravati",id:"Amravati"},{name:"Aurangabad",id:"Aurangabad"},{name:"Beed",id:"Beed"},{name:"Bhandara",id:"Bhandara"},{name:"Buldhana",id:"Buldhana"},{name:"Chandrapur",id:"Chandrapur"},{name:"Dhule",id:"Dhule"},{name:"Gadchiroli",id:"Gadchiroli"},{name:"Gondia",id:"Gondia"},{name:"Hingoli",id:"Hingoli"},{name:"Jalgaon",id:"Jalgaon"},{name:"Jalna",id:"Jalna"},{name:"Kolhapur",id:"Kolhapur"},{name:"Latur",id:"Latur"},{name:"Mumbai City",id:"Mumbai City"},{name:"Mumbai Suburban",id:"Mumbai Suburban"},{name:"Nagpur",id:"Nagpur"},{name:"Nanded",id:"Nanded"},{name:"Nandurbar",id:"Nandurbar"},{name:"Nashik",id:"Nashik"},{name:"Osmanabad",id:"Osmanabad"},{name:"Palghar",id:"Palghar"},{name:"Parbhani",id:"Parbhani"},{name:"Pune",id:"Pune"},{name:"Raigad",id:"Raigad"},{name:"Ratnagiri",id:"Ratnagiri"},{name:"Sangli",id:"Sangli"},{name:"Satara",id:"Satara"},{name:"Sindhudurg",id:"Sindhudurg"},{name:"Solapur",id:"Solapur"},{name:"Thane",id:"Thane"},{name:"Wardha",id:"Wardha"},{name:"Washim",id:"Washim"},{name:"Yavatmal",id:"Yavatmal"},{name:"Bishnupur",id:"Bishnupur"},{name:"Chandel",id:"Chandel"},{name:"Churachandpur",id:"Churachandpur"},{name:"Imphal East",id:"Imphal East"},{name:"Imphal West",id:"Imphal West"},{name:"Jiribam",id:"Jiribam"},{name:"Kakching",id:"Kakching"},{name:"Kamjong",id:"Kamjong"},{name:"Kangpokpi",id:"Kangpokpi"},{name:"Noney",id:"Noney"},{name:"Pherzawl",id:"Pherzawl"},{name:"Senapati",id:"Senapati"},{name:"Tamenglong",id:"Tamenglong"},{name:"Tengnoupal",id:"Tengnoupal"},{name:"Thoubal",id:"Thoubal"},{name:"Ukhrul",id:"Ukhrul"},{name:"East Garo Hills",id:"East Garo Hills"},{name:"East Jaintia Hills",id:"East Jaintia Hills"},{name:"East Khasi Hills",id:"East Khasi Hills"},{name:"North Garo Hills",id:"North Garo Hills"},{name:"Ri Bhoi",id:"Ri Bhoi"},{name:"South Garo Hills",id:"South Garo Hills"},{name:"South West Garo Hills ",id:"South West Garo Hills "},{name:"South West Khasi Hills",id:"South West Khasi Hills"},{name:"West Garo Hills",id:"West Garo Hills"},{name:"West Jaintia Hills",id:"West Jaintia Hills"},{name:"West Khasi Hills",id:"West Khasi Hills"},{name:"Aizawl",id:"Aizawl"},{name:"Champhai",id:"Champhai"},{name:"Kolasib",id:"Kolasib"},{name:"Lawngtlai",id:"Lawngtlai"},{name:"Lunglei",id:"Lunglei"},{name:"Mamit",id:"Mamit"},{name:"Saiha",id:"Saiha"},{name:"Serchhip",id:"Serchhip"},{name:"Dimapur",id:"Dimapur"},{name:"Kiphire",id:"Kiphire"},{name:"Kohima",id:"Kohima"},{name:"Longleng",id:"Longleng"},{name:"Mokokchung",id:"Mokokchung"},{name:"Mon",id:"Mon"},{name:"Peren",id:"Peren"},{name:"Phek",id:"Phek"},{name:"Tuensang",id:"Tuensang"},{name:"Wokha",id:"Wokha"},{name:"Zunheboto",id:"Zunheboto"},{name:"Angul",id:"Angul"},{name:"Balangir",id:"Balangir"},{name:"Balasore",id:"Balasore"},{name:"Bargarh",id:"Bargarh"},{name:"Bhadrak",id:"Bhadrak"},{name:"Boudh",id:"Boudh"},{name:"Cuttack",id:"Cuttack"},{name:"Deogarh",id:"Deogarh"},{name:"Dhenkanal",id:"Dhenkanal"},{name:"Gajapati",id:"Gajapati"},{name:"Ganjam",id:"Ganjam"},{name:"Jagatsinghapur",id:"Jagatsinghapur"},{name:"Jajpur",id:"Jajpur"},{name:"Jharsuguda",id:"Jharsuguda"},{name:"Kalahandi",id:"Kalahandi"},{name:"Kandhamal",id:"Kandhamal"},{name:"Kendrapara",id:"Kendrapara"},{name:"Kendujhar (Keonjhar)",id:"Kendujhar (Keonjhar)"},{name:"Khordha",id:"Khordha"},{name:"Koraput",id:"Koraput"},{name:"Malkangiri",id:"Malkangiri"},{name:"Mayurbhanj",id:"Mayurbhanj"},{name:"Nabarangpur",id:"Nabarangpur"},{name:"Nayagarh",id:"Nayagarh"},{name:"Nuapada",id:"Nuapada"},{name:"Puri",id:"Puri"},{name:"Rayagada",id:"Rayagada"},{name:"Sambalpur",id:"Sambalpur"},{name:"Sonepur",id:"Sonepur"},{name:"Sundargarh",id:"Sundargarh"},{name:"Karaikal",id:"Karaikal"},{name:"Mahe",id:"Mahe"},{name:"Pondicherry",id:"Pondicherry"},{name:"Yanam",id:"Yanam"},{name:"Amritsar",id:"Amritsar"},{name:"Barnala",id:"Barnala"},{name:"Bathinda",id:"Bathinda"},{name:"Faridkot",id:"Faridkot"},{name:"Fatehgarh Sahib",id:"Fatehgarh Sahib"},{name:"Fazilka",id:"Fazilka"},{name:"Ferozepur",id:"Ferozepur"},{name:"Gurdaspur",id:"Gurdaspur"},{name:"Hoshiarpur",id:"Hoshiarpur"},{name:"Jalandhar",id:"Jalandhar"},{name:"Kapurthala",id:"Kapurthala"},{name:"Ludhiana",id:"Ludhiana"},{name:"Mansa",id:"Mansa"},{name:"Moga",id:"Moga"},{name:"Muktsar",id:"Muktsar"},{name:"Nawanshahr (Shahid Bhagat Singh Nagar)",id:"Nawanshahr (Shahid Bhagat Singh Nagar)"},{name:"Pathankot",id:"Pathankot"},{name:"Patiala",id:"Patiala"},{name:"Rupnagar",id:"Rupnagar"},{name:"Sahibzada Ajit Singh Nagar (Mohali)",id:"Sahibzada Ajit Singh Nagar (Mohali)"},{name:"Sangrur",id:"Sangrur"},{name:"Tarn Taran",id:"Tarn Taran"},{name:"Ajmer",id:"Ajmer"},{name:"Alwar",id:"Alwar"},{name:"Banswara",id:"Banswara"},{name:"Baran",id:"Baran"},{name:"Barmer",id:"Barmer"},{name:"Bharatpur",id:"Bharatpur"},{name:"Bhilwara",id:"Bhilwara"},{name:"Bikaner",id:"Bikaner"},{name:"Bundi",id:"Bundi"},{name:"Chittorgarh",id:"Chittorgarh"},{name:"Churu",id:"Churu"},{name:"Dausa",id:"Dausa"},{name:"Dholpur",id:"Dholpur"},{name:"Dungarpur",id:"Dungarpur"},{name:"Hanumangarh",id:"Hanumangarh"},{name:"Jaipur",id:"Jaipur"},{name:"Jaisalmer",id:"Jaisalmer"},{name:"Jalore",id:"Jalore"},{name:"Jhalawar",id:"Jhalawar"},{name:"Jhunjhunu",id:"Jhunjhunu"},{name:"Jodhpur",id:"Jodhpur"},{name:"Karauli",id:"Karauli"},{name:"Kota",id:"Kota"},{name:"Nagaur",id:"Nagaur"},{name:"Pali",id:"Pali"},{name:"Pratapgarh",id:"Pratapgarh"},{name:"Rajsamand",id:"Rajsamand"},{name:"Sawai Madhopur",id:"Sawai Madhopur"},{name:"Sikar",id:"Sikar"},{name:"Sirohi",id:"Sirohi"},{name:"Sri Ganganagar",id:"Sri Ganganagar"},{name:"Tonk",id:"Tonk"},{name:"Udaipur",id:"Udaipur"},{name:"East Sikkim",id:"East Sikkim"},{name:"North Sikkim",id:"North Sikkim"},{name:"South Sikkim",id:"South Sikkim"},{name:"West Sikkim",id:"West Sikkim"},{name:"Ariyalur",id:"Ariyalur"},{name:"Chennai",id:"Chennai"},{name:"Coimbatore",id:"Coimbatore"},{name:"Cuddalore",id:"Cuddalore"},{name:"Dharmapuri",id:"Dharmapuri"},{name:"Dindigul",id:"Dindigul"},{name:"Erode",id:"Erode"},{name:"Kanchipuram",id:"Kanchipuram"},{name:"Kanyakumari",id:"Kanyakumari"},{name:"Karur",id:"Karur"},{name:"Krishnagiri",id:"Krishnagiri"},{name:"Madurai",id:"Madurai"},{name:"Nagapattinam",id:"Nagapattinam"},{name:"Namakkal",id:"Namakkal"},{name:"Nilgiris",id:"Nilgiris"},{name:"Perambalur",id:"Perambalur"},{name:"Pudukkottai",id:"Pudukkottai"},{name:"Ramanathapuram",id:"Ramanathapuram"},{name:"Salem",id:"Salem"},{name:"Sivaganga",id:"Sivaganga"},{name:"Thanjavur",id:"Thanjavur"},{name:"Theni",id:"Theni"},{name:"Thoothukudi (Tuticorin)",id:"Thoothukudi (Tuticorin)"},{name:"Tiruchirappalli",id:"Tiruchirappalli"},{name:"Tirunelveli",id:"Tirunelveli"},{name:"Tiruppur",id:"Tiruppur"},{name:"Tiruvallur",id:"Tiruvallur"},{name:"Tiruvannamalai",id:"Tiruvannamalai"},{name:"Tiruvarur",id:"Tiruvarur"},{name:"Vellore",id:"Vellore"},{name:"Viluppuram",id:"Viluppuram"},{name:"Virudhunagar",id:"Virudhunagar"},{name:"Adilabad",id:"Adilabad"},{name:"Bhadradri Kothagudem",id:"Bhadradri Kothagudem"},{name:"Hyderabad",id:"Hyderabad"},{name:"Jagtial",id:"Jagtial"},{name:"Jangaon",id:"Jangaon"},{name:"Jayashankar Bhoopalpally",id:"Jayashankar Bhoopalpally"},{name:"Jogulamba Gadwal",id:"Jogulamba Gadwal"},{name:"Kamareddy",id:"Kamareddy"},{name:"Karimnagar",id:"Karimnagar"},{name:"Khammam",id:"Khammam"},{name:"Komaram Bheem Asifabad",id:"Komaram Bheem Asifabad"},{name:"Mahabubabad",id:"Mahabubabad"},{name:"Mahabubnagar",id:"Mahabubnagar"},{name:"Mancherial",id:"Mancherial"},{name:"Medak",id:"Medak"},{name:"Medchal",id:"Medchal"},{name:"Nagarkurnool",id:"Nagarkurnool"},{name:"Nalgonda",id:"Nalgonda"},{name:"Nirmal",id:"Nirmal"},{name:"Nizamabad",id:"Nizamabad"},{name:"Peddapalli",id:"Peddapalli"},{name:"Rajanna Sircilla",id:"Rajanna Sircilla"},{name:"Rangareddy",id:"Rangareddy"},{name:"Sangareddy",id:"Sangareddy"},{name:"Siddipet",id:"Siddipet"},{name:"Suryapet",id:"Suryapet"},{name:"Vikarabad",id:"Vikarabad"},{name:"Wanaparthy",id:"Wanaparthy"},{name:"Warangal (Rural)",id:"Warangal (Rural)"},{name:"Warangal (Urban)",id:"Warangal (Urban)"},{name:"Yadadri Bhuvanagiri",id:"Yadadri Bhuvanagiri"},{name:"Dhalai",id:"Dhalai"},{name:"Gomati",id:"Gomati"},{name:"Khowai",id:"Khowai"},{name:"North Tripura",id:"North Tripura"},{name:"Sepahijala",id:"Sepahijala"},{name:"South Tripura",id:"South Tripura"},{name:"Unakoti",id:"Unakoti"},{name:"West Tripura",id:"West Tripura"},{name:"Almora",id:"Almora"},{name:"Bageshwar",id:"Bageshwar"},{name:"Chamoli",id:"Chamoli"},{name:"Champawat",id:"Champawat"},{name:"Dehradun",id:"Dehradun"},{name:"Haridwar",id:"Haridwar"},{name:"Nainital",id:"Nainital"},{name:"Pauri Garhwal",id:"Pauri Garhwal"},{name:"Pithoragarh",id:"Pithoragarh"},{name:"Rudraprayag",id:"Rudraprayag"},{name:"Tehri Garhwal",id:"Tehri Garhwal"},{name:"Udham Singh Nagar",id:"Udham Singh Nagar"},{name:"Uttarkashi",id:"Uttarkashi"},{name:"Agra",id:"Agra"},{name:"Aligarh",id:"Aligarh"},{name:"Allahabad",id:"Allahabad"},{name:"Ambedkar Nagar",id:"Ambedkar Nagar"},{name:"Amethi (Chatrapati Sahuji Mahraj Nagar)",id:"Amethi (Chatrapati Sahuji Mahraj Nagar)"},{name:"Amroha (J.P. Nagar)",id:"Amroha (J.P. Nagar)"},{name:"Auraiya",id:"Auraiya"},{name:"Azamgarh",id:"Azamgarh"},{name:"Baghpat",id:"Baghpat"},{name:"Bahraich",id:"Bahraich"},{name:"Ballia",id:"Ballia"},{name:"Balrampur",id:"Balrampur"},{name:"Banda",id:"Banda"},{name:"Barabanki",id:"Barabanki"},{name:"Bareilly",id:"Bareilly"},{name:"Basti",id:"Basti"},{name:"Bhadohi",id:"Bhadohi"},{name:"Bijnor",id:"Bijnor"},{name:"Budaun",id:"Budaun"},{name:"Bulandshahr",id:"Bulandshahr"},{name:"Chandauli",id:"Chandauli"},{name:"Chitrakoot",id:"Chitrakoot"},{name:"Deoria",id:"Deoria"},{name:"Etah",id:"Etah"},{name:"Etawah",id:"Etawah"},{name:"Faizabad",id:"Faizabad"},{name:"Farrukhabad",id:"Farrukhabad"},{name:"Fatehpur",id:"Fatehpur"},{name:"Firozabad",id:"Firozabad"},{name:"Gautam Buddha Nagar",id:"Gautam Buddha Nagar"},{name:"Ghaziabad",id:"Ghaziabad"},{name:"Ghazipur",id:"Ghazipur"},{name:"Gonda",id:"Gonda"},{name:"Gorakhpur",id:"Gorakhpur"},{name:"Hamirpur",id:"Hamirpur"},{name:"Hapur (Panchsheel Nagar)",id:"Hapur (Panchsheel Nagar)"},{name:"Hardoi",id:"Hardoi"},{name:"Hathras",id:"Hathras"},{name:"Jalaun",id:"Jalaun"},{name:"Jaunpur",id:"Jaunpur"},{name:"Jhansi",id:"Jhansi"},{name:"Kannauj",id:"Kannauj"},{name:"Kanpur Dehat",id:"Kanpur Dehat"},{name:"Kanpur Nagar",id:"Kanpur Nagar"},{name:"Kanshiram Nagar (Kasganj)",id:"Kanshiram Nagar (Kasganj)"},{name:"Kaushambi",id:"Kaushambi"},{name:"Kushinagar (Padrauna)",id:"Kushinagar (Padrauna)"},{name:"Lakhimpur - Kheri",id:"Lakhimpur - Kheri"},{name:"Lalitpur",id:"Lalitpur"},{name:"Lucknow",id:"Lucknow"},{name:"Maharajganj",id:"Maharajganj"},{name:"Mahoba",id:"Mahoba"},{name:"Mainpuri",id:"Mainpuri"},{name:"Mathura",id:"Mathura"},{name:"Mau",id:"Mau"},{name:"Meerut",id:"Meerut"},{name:"Mirzapur",id:"Mirzapur"},{name:"Moradabad",id:"Moradabad"},{name:"Muzaffarnagar",id:"Muzaffarnagar"},{name:"Pilibhit",id:"Pilibhit"},{name:"Pratapgarh",id:"Pratapgarh"},{name:"RaeBareli",id:"RaeBareli"},{name:"Rampur",id:"Rampur"},{name:"Saharanpur",id:"Saharanpur"},{name:"Sambhal (Bhim Nagar)",id:"Sambhal (Bhim Nagar)"},{name:"Sant Kabir Nagar",id:"Sant Kabir Nagar"},{name:"Shahjahanpur",id:"Shahjahanpur"},{name:"Shamali (Prabuddh Nagar)",id:"Shamali (Prabuddh Nagar)"},{name:"Shravasti",id:"Shravasti"},{name:"Siddharth Nagar",id:"Siddharth Nagar"},{name:"Sitapur",id:"Sitapur"},{name:"Sonbhadra",id:"Sonbhadra"},{name:"Sultanpur",id:"Sultanpur"},{name:"Unnao",id:"Unnao"},{name:"Varanasi",id:"Varanasi"},{name:"Alipurduar",id:"Alipurduar"},{name:"Bankura",id:"Bankura"},{name:"Birbhum",id:"Birbhum"},{name:"Burdwan (Bardhaman)",id:"Burdwan (Bardhaman)"},{name:"Cooch Behar",id:"Cooch Behar"},{name:"Dakshin Dinajpur (South Dinajpur)",id:"Dakshin Dinajpur (South Dinajpur)"},{name:"Darjeeling",id:"Darjeeling"},{name:"Hooghly",id:"Hooghly"},{name:"Howrah",id:"Howrah"},{name:"Jalpaiguri",id:"Jalpaiguri"},{name:"Kalimpong",id:"Kalimpong"},{name:"Kolkata",id:"Kolkata"},{name:"Malda",id:"Malda"},{name:"Murshidabad",id:"Murshidabad"},{name:"Nadia",id:"Nadia"},{name:"North 24 Parganas",id:"North 24 Parganas"},{name:"Paschim Medinipur (West Medinipur)",id:"Paschim Medinipur (West Medinipur)"},{name:"Purba Medinipur (East Medinipur)",id:"Purba Medinipur (East Medinipur)"},{name:"Purulia",id:"Purulia"},{name:"South 24 Parganas",id:"South 24 Parganas"},{name:"Uttar Dinajpur (North Dinajpur)",id:"Uttar Dinajpur (North Dinajpur)"}] 