export class MsnDecoder {

    first = [
        ['A', 'AMC Atlantic Region C-5, C-17'],
        ['B', 'Civil Carriers Operating in Atlantic Region'],
        ['C', 'PACAF KC-135'],
        ['D', 'ANG O&M (ANG Mission)'],
        ['E', 'PACAF C-12, C-21 (OSA); C-37, C-40 (SAM)'],
        ['F', 'CENTCOM – All Intra-theater missions'],
        ['G', 'AMC C-130 (Atlantic Region)'],
        ['H', 'AMC C-130 (Pacific Region)'],
        ['I', 'Not Assigned (Too similar to number 1)'],
        ['J', 'ANG (TWCF) (AMC Mission)'],
        ['K', 'AETC C-5, KC-135, C-17, C-130'],
        ['L', 'PACAF C-130s, C-17'],
        ['M', 'Operational Support Airlift (OSA) to SAAM and CDR'],
        ['N', 'Allied Air Forces (Operating under cooperative alft)'],
        ['O', 'Commercial Air Mission (CONUS Charter)'],
        ['P', 'AMC Pacific Region C-5, C-17'],
        ['Q', 'AFRC O&M (AFRC Mission)'],
        ['R', 'Search and Rescue Forces (SAR)'],
        ['S', 'USSOUTHCOM'],
        ['T', 'Civil Carriers Operating in Pacific Region'],
        ['U', 'USAFE (TWCF)'],
        ['V', 'ANG (AMC Mission TWCF Hour Overfly)'],
        ['W', 'Weather Reconnaissance'],
        ['X', 'AFRC (TWCF) (AMC Mission)'],
        ['Y', 'AFSOC/AFRC (O&M)'],
        ['Z', 'AFRC O&M (AMC Mission)'],
        ['0', 'Not Used'],
        ['1', 'USAFE KC-135s'],
        ['2', 'USAFE (86AW) (O&M)'],
        ['3', 'ANG/AFSOC/Other Services in support of CSAR (O&M)'],
        ['4', 'Other MAJCOM or Service Aircraft not listed USAF'],
        ['5', 'Special Operations Forces (SOCOM/AFSOC)'],
        ['6', 'AMC KC-10s'],
        ['7', 'ANG O&M (AMC Mission)'],
        ['8', 'AMC KC-135s'],
        ['9', 'Executive Aircraft/SAM'],
    ];

    second = [
        ['A', 'Onload to Offload'],
        ['B', 'Channel Cargo'],
        ['D', 'Support(move tail for Depot MX or position tail to homestation from mission termination point)'],
        ['E', 'Training: non-local flights (“Off-Station Trainers” including ORI or ORE “fly-away” sorties)'],
        ['F', 'Onload to offload'],
        ['J', 'Positioning'],
        ['K', 'Channel Passenger'],
        ['L', 'Aeromedical Evacuation (AE)'],
        ['M', 'Deployment/Redeployment or Onload to Offload'],
        ['P', 'Active Aerial Refueling (AR)'],
        ['Q', 'Channel Mixed (PAX and cargo)'],
        ['U', 'Training: Local Flights (to include home station “Round-robin” sorties)'],
        ['V', 'Depositioning'],
        ['W', 'Equipment Support (SAAM support)']
    ];

    third = [
        ['A', 'Priority 3 and 4 USTRANSCOM/AMC mission OR Requirements AIREVAC, Atlantic Region'],
        ['B', 'Frequency/Distribution AIREVAC/Channel, Atlantic Region'],
        ['C', 'Frequency/Distribution AIREVAC/Channel, Pacific Region'],
        ['D', 'OSA Support AIREVAC Mission'],
        ['E', 'CPX AIREVAC/Channel missions as assigned by 18 AF/A3Y'],
        ['E', 'Command Post Exercise (CPX) as assigned by 18 AF/A3Y'],
        ['G', 'Identifies JA/ATT Mission'],
        ['H', 'HQ AMC-tasked missions (excludes JCS exercise or Contingency)'],
        ['J', 'AIREVAC/Channel missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
        ['J', 'Contingency Mission as Assigned by 618 AOC/XOP'],
        ['M', 'Identifies SAAM Mission'],
        ['N', 'Applicable to all miscellaneous missions except ORIs and AMC OSAs.'],
        ['N', 'Unit generated priority 3, 4 missions [STOP! AMC and AMC-gained units: If 2nd character is E, S, or U use Chapter 11 (for ANG), Chapter 13 (AMC), or Chapter 14 (AFRC)]'],
        ['P', 'Requirements AIREVAC, Pacific Region'],
        ['Q', 'Command Post Exercise (CPX) as assigned by 18 AF/A3Y'],
        ['R', 'Contingency Mission as Assigned by 618 AOC/XOP'],
        ['T', 'Identifies Operation Test and Evaluation (OT&E) SAAM Approved by HQ AMC/A2XP'],
        ['U', 'Contingency Mission as Assigned by 618 AOC/XOP'],
        ['W', 'Contingency Mission as Assigned by 618 AOC/XOP'],
        ['X', 'CJCS Approved Exercises (live missions)'],
        ['Y', 'Contingency Mission as Assigned by 618 AOC/XOP'],
        ['Z', 'Contingency Mission as Assigned by 618 AOC/XOP'],
    ];

    orgunit = [
        ['GA', '174 WG/135 AG Baltimore MD (ANG), C-130J'],
        ['24', '317 AG Dyess AFB TX (AMC), C-130H'],
        ['GB', '118 AW Nashville TN (ANG), C-130H/WC-130H'],
        ['25', '23 WG Moody AFB GA (ACC)(Includes 347th and 563rd Rescue Groups), C-130E'],
        ['GC', '145 AW Charlotte NC (ANG), C-130H'],
        ['26', 'USAF Expeditionary Center CADS, C-130E'],
        ['GD', '164 AW Memphis TN (ANG), C-5A'],
        ['27', '314 AW Little Rock AFB AR (AETC), C-130J'],
        ['GE', '165 AW Savannah GA (ANG), C-130H'],
        ['28', '97 AMW Altus AFB OK (AETC), C-17A'],
        ['GF', '105 AW Stewart Field NY (ANG), C-17A'],
        ['29', '119 WG/118 AS Hector Field, Fargo, ND (ANG), C-21'],
        ['GG', '123 AW Louisville KY (ANG), C-130H'],
        ['30', 'PACOM, C-12'],
        ['GH', '182 AW Peoria IL (ANG), C-130H'],
        ['31', '110 AOG Battle Creek, MI (ANG), C-21'],
        ['GI', '127 WG Selfridge MI (ANG), KC-135T'],
        ['32', '159 WG NAS New Orleans, LA (ANG), C-21'],
        ['GJ', '133 AW Minneapolis MN (ANG), C-130H'],
        ['33', '125 FW Jacksonville NAS, FL (ANG), WC-130H'],
        ['GK', '172 AW Jackson MS (ANG), C-17A'],
        ['34', 'SOUTHCOM, C-21'],
        ['GL', '156 AW S. Juan, Puerto Rico (ANG), C-130E'],
        ['35', 'SOUTHCOM, C-130H'],
        ['GM', '109 AW Schenectady/Scotia NY (ANG)*, LC-130H/C-130H'],
        ['36', 'SOUTHCOM, CT-43'],
        ['GN', '143 AW Quonset RI (ANG), C-130J'],
        ['37', '6 AMW MacDill AFB FL, C-37A'],
        ['GO', '189 AW Little Rock, AR (ANG), C-130H'],
        ['38', 'Not Assigned'],
        ['GP', '166 AW New Castle DE (ANG), C-130H'],
        ['39', '113WG/201AS Andrews AFB, MD (ANG), C-38/C-40'],
        ['GQ', '136 AW Fort Worth NAS TX (ANG), C-130H'],
        ['40', '22 ARW McConnell AFB KS (AMC)/931 ARG McConnell AFB KS (AFRC), KC-135R/T'],
        ['GR', '152 AW Reno-Tahoe NV (ANG), C-130H'],
        ['41', '6 AMW MacDill AFB FL (AMC)/927 ARW MacDill AFB FL (AFRC), KC-135R/T'],
        ['GS', '179 AW Mansfield Lahm OH (ANG), C-130H'],
        ['42', '92 ARW Fairchild AFB WA (AMC), KC-135R/T'],
        ['GT', '137 ARW Will Rogers OK (ANG Assoc)*, KC-135E'],
        ['43', '509 WIC, Fairchild AFB, WA (AMC), KC-135R/T'],
        ['GU', '130 AW Yeager/Charleston WV (ANG), C-130H'],
        ['44', '200AS, Peterson AFB, CO (ANG), C-21'],
        ['GV', '139 AW Rosecrans/St Joseph MO, C-130H'],
        ['45', '305 AMW McGuire AFB NJ (AMC)/514 AMW McGuire AFB NJ (AFRC), KC-10A'],
        ['GW', '167 AW Martinsburg WV (ANG), C-5A'],
        ['46', '193SOW, Harrisburg Int’l PA, (ANG), C-130/EC-130'],
        ['GX', '146 AW Channel Islands CA (ANG), C-130J'],
        ['47', '319 ARW Grand Forks AFB ND (AMC)*, KC-135R/T'],
        ['GY', '153 AW Cheyenne WY (ANG) 30 AS (AMC Reverse Assoc. Unit), C-130H'],
        ['48', '176WG/144AS Elmendorf AFB, AK (ANG)*, C-130H'],
        ['GZ', '110AW/177AS Fargo ND (ANG), C-21A'],
        ['49', '176WG/249AS, Elmendorf AFB, AK(ANG Assoc), C-17A'],
        ['RA', '94 AW Dobbins ARB GA (AFRC), C-130H'],
        ['50', '107 AW Niagara Falls NY(ANG Assoc), C-130H'],
        ['RB', '908 AW Maxwell AFB AL (AFRC), C-130H'],
        ['51', '117 ARW Birmingham AL (ANG), KC-135R'],
        ['RC', '403 WG Keesler MS (AFRC), WC-130J'],
        ['52', '60 AMW Travis AFB CA (AMC)/349 AMW Travis AFB CA (AFRC), KC-10A'],
        ['RD', '403 WG Keesler MS (AFRC), C-130J'],
        ['53', '106RW to include 101st, 102nd and 103rd RQS, HH-60/HC-130'],
        ['RE', '445 AW Wright Patterson AFB OH (AFRC), C-17A'],
        ['54', '15WG/ 96ARS Joint Base Pearl Harbor Hickam AFB HI, KC-135'],
        ['RF', '439 AW Westover AFB MA (AFRC), C-5B'],
        ['55', '101 ARW Bangor ME (ANG), KC-135E/R'],
        ['RG', '911 AW Pittsburgh PA (AFRC), C-130H'],
        ['56', '108 ARW McGuire AFB NJ (ANG), KC-135E/R'],
        ['RH', '914 AW Niagara Falls NY (AFRC), C-130H'],
        ['57', 'Not Assigned'],
        ['RI', 'Not Assigned'],
        ['58', 'Not assigned'],
        ['RJ', '452 AMW March AFB (AFRC), C-17A'],
        ['59', '452 AMW March ARB CA (AFRC), KC-135R'],
        ['RK', '910 AW Youngstown OH (AFRC), C-130H'],
        ['60', 'Not Assigned'],
        ['RL', 'Not Assigned'],
        ['61', '434 ARW Grissom AFB IN (AFRC), KC-135R'],
        ['RM', 'Not Assigned'],
        ['62', '169 FW McEntire Joint NGB SC (ANG), WC-130H'],
        ['RN', 'Not Assigned'],
        ['63', '161 ARW Phoenix (Sky Harbor IAP) AZ (ANG), KC-135R'],
        ['RO', '433 AW Lackland/Kelly AFB TX (AFRC), C-5A'],
        ['64', '507 ARW Tinker AFB OK (AFRC), KC-135R'],
        ['RP', '302 AW Peterson CO (AFRC), C-130H'],
        ['65', 'Not Assigned'],
        ['RQ', '934 AW Minneapolis MN (AFRC), C-130H'],
        ['66', '459 ARW Andrews AFB MD (AFRC), KC-135R'],
        ['RR', 'Not Assigned'],
        ['67', '168 ARW Eielson AFB AK (ANG), KC-135R'],
        ['RS', 'Not Assigned'],
        ['68', '154WG/203 ARS Joint Base Pearl Harbor Hickam AFB HI (PACAF), KC-135R'],
        ['RT', '440 AW Pope AFB (AFRC)/43 AG (AMC Assoc) – use “23”, C-130H'],
        ['69', '154 WG/204 AS Joint Base Pearl Harbor Hickam AFB HI (ANG Assoc), C-17A'],
        ['RU', 'Not Assigned(previously 169 FW McEntire now “62”)'],
        ['70', '18 WG Kadena AB (PACAF), KC-135R/T'],
        ['RV', 'CORONET OAK, C-130H/J'],
        ['71', '3 WG Elmendorf AFB AK (PACAF), C-12F'],
        ['RW', 'Not Assigned'],
        ['72', '3 WG Elmendorf AFB AK (PACAF), C-130H/C-17A/C-12F'],
        ['RX', '76 AS Ramstein AB , Germany(USAFE OSA), C-20/C-21'],
        ['73', '15 WG Joint Base Pearl Harbor Hickam AFB HI (PACAF), C-37/C-40'],
        ['RY', 'Not Assigned'],
        ['74', '374 AW Yokota AB, C-130H/C-12J'],
        ['RZ', '309 AS Chievres, Belgium(USAFE OSA), C-37'],
        ['75', '932 AW Scott AFB IL (AFRC), C-9C/C-40C'],
        ['00', 'Not Assigned'],
        ['76', '375 AW Scott AFB IL, C-21/C-40C'],
        ['01', '436 AW Dover AFB DE (AMC)/512 AW Dover AFB DE (Assoc), C-17A'],
        ['77', '375AW/54 AS Scott AFB IL (AMC) [OSA/EA/SAM], C-40C'],
        ['02', '436 AW Dover AFB DE (AMC)/512 AW Dover AFB DE (AFRC), C-5B/M'],
        ['78', '121 ARW Rickenbacker OH (ANG), KC-135R'],
        ['03', '60 AMW Travis AFB CA (AMC)/349 AMW Travis AFB CA (AFRC), C-5B/C'],
        ['79', '126 ARW Scott AFB IL (ANG)/375 AW/906 ARS Scott (AMC Assoc), KC-135R'],
        ['04', '60 AMW Travis AFB CA (AMC)/349 AMW Travis AFB CA (AFRC), C-17A'],
        ['80', '128 ARW General Mitchell WI (ANG), KC-135R'],
        ['05', '62 AMW McChord AFB (AMC)/446th AW McChord AFB WA (AFRC), C-17A'],
        ['81', '134 ARW McGhee Tyson TN (ANG), KC-135R'],
        ['06', '305 AMW McGuire AFB NJ (AMC)/514 AMW McGuire AFB NJ (AFRC), C-17A'],
        ['82', '141 ARW Fairchild AFB WA(ANG Assoc), KC-135R/T'],
        ['07', 'Not Assigned'],
        ['83', '151 ARW Salt Lake City UT (ANG), KC-135R'],
        ['08', '437 AW Joint Base Charleston AFB, SC (AMC)/315 AW Joint Base Charleston AFB, SC (AFRC), C-17A'],
        ['84', '157 ARW Pease NH (ANG), KC-135R'],
        ['09', '86 AW Ramstein AB (USAFE), C-130E/C-130H/C-40B/C-37A/C-20H/C-21A'],
        ['85', '155 ARW Lincoln NE (ANG), KC-135R'],
        ['10', '412 TW Edwards AFB CA (AFMC), Any MDS'],
        ['86', 'Not Assigned'],
        ['11', 'HAW Papa, Hungary (USAFE), C-17A'],
        ['87', '171 ARW Pittsburgh PA (ANG), KC-135T'],
        ['12', 'Not Assigned'],
        ['88', 'Not Assigned'],
        ['13', 'Not Assigned'],
        ['89', '190 ARW Forbes ANGB KS (ANG), KC-135R'],
        ['14', 'Not Assigned'],
        ['90', 'Not Assigned'],
        ['15', '97 AMW Altus AFB (AETC), KC-135R'],
        ['91', '185 ARW Sioux City IA (ANG), KC-135R'],
        ['16', 'Not Assigned'],
        ['92', 'Not Assigned'],
        ['17', '15 WG Joint Base Pearl Harbor Hickam AFB HI (PACAF), C-17A'],
        ['93', '916 ARW Seymour Johnson AFB NC (AFRC), KC-135R'],
        ['18', 'Navy, C-130T'],
        ['94', 'Not Assigned'],
        ['19', 'Not Assigned'],
        ['95', '100 ARW RAF Mildenhall, UK, KC-135R/T'],
        ['20', 'Incirlik Hub'],
        ['96', '618 AOC/XOBK, KC-135R'],
        ['21', 'Not Assigned'],
        ['97', '618 AOC/XOOK, KC-135R'],
        ['22', '19 AW Little Rock AFB AR (AMC), C-130H/J'],
        ['98', '618 AOC SPARE'],
        ['23', '43 AG Pope AFB NC (AMC)/440 AW (AFRC)- use “RT”, C-130H'],
        ['99', '618 AOC SPARE']
    ];

    route = [
        ['01', 'Atlantic Region Express'],
        ['A1', 'Alaska Support'],
        ['M7', 'Kingston'],
        ['03', 'Pacific Region Express'],
        ['A3', 'Alaska Support'],
        ['N1', 'Roosevelt Roads'],
        ['05', 'Not Assigned'],
        ['A5', 'Alaska Support'],
        ['N3', 'St Croix'],
        ['07', 'Express'],
        ['A7', 'Al Dhafra'],
        ['N5', 'Quito'],
        ['09', 'Nairobi, Kenya HKJK-NBO'],
        ['B1', 'Lima'],
        ['N7', 'Qayyarah West'],
        ['11', 'Manda Bay, Kenya HKLU-LAU'],
        ['B3', 'Asuncion'],
        ['P1', 'Ali Base'],
        ['13', 'Mombasa, Kenya HKMO-MBA'],
        ['B5', 'Buenos Aires'],
        ['P3', 'Al Asad'],
        ['15', 'Dire Dawa, Ethiopia HADR-DIR'],
        ['B7', 'Santiago'],
        ['P5', 'Diego Garcia'],
        ['17', 'Entebbe, Uganda HUEN-EBB'],
        ['C1', 'Vientiane'],
        ['P7', 'Not Assigned'],
        ['19', 'OEF AE (as assigned by 618 AOC/XOP)'],
        ['C3', 'Hanoi'],
        ['Q1', 'Cairo'],
        ['21', 'OIF AE (as assigned by 618 AOC/XOP)'],
        ['C5', 'Zamboanga'],
        ['Q3', 'Other Africa'],
        ['23', 'Not Assigned'],
        ['C7', 'Bangkok'],
        ['Q5', 'Nairobi'],
        ['25', 'Not Assigned'],
        ['D1', 'Jakarta'],
        ['Q7', 'Djibouti'],
        ['27', 'Not Assigned'],
        ['D3', 'Singapore'],
        ['R1', 'Ramstein'],
        ['R2', 'Ramstein'],
        ['R3', 'Ramstein'],
        ['29', 'Mosul'],
        ['D5', 'Pago Pago'],
        ['R5', 'Other Europe'],
        ['31', 'Mazar I Sharif'],
        ['D7', 'Christchurch'],
        ['R7', 'Mildenhall'],
        ['33', 'Baku Hub'],
        ['E1', 'Alice Springs'],
        ['S1', 'European Support'],
        ['35', 'Manas'],
        ['E3', 'Other Australia'],
        ['S3', 'Rota'],
        ['37', 'Kabul'],
        ['E5', 'Richmond'],
        ['S5', 'Not Assigned'],
        ['39', 'OIF Hub'],
        ['E7', 'King Faisal Jordan'],
        ['S7', 'Sabiha Gokcen'],
        ['41', 'Joint Base Pearl Harbor Hickam /Honolulu'],
        ['F1', 'Amman'],
        ['T1', 'Incirlik'],
        ['43', 'Kwajalein'],
        ['F3', 'Bahrain'],
        ['T3', 'Ataturk'],
        ['45', 'Al Sahra'],
        ['F5', 'Al Taqaddum'],
        ['T5', 'Diyarbakir'],
        ['47', 'Wake Island'],
        ['F7', 'Fujairah'],
        ['T7', 'Esenboga'],
        ['49', 'Pohnpei'],
        ['G1', 'Seeb'],
        ['U1', 'Araxos'],
        ['51', 'Guam'],
        ['G3', 'Thumrait'],
        ['U3', 'Masirah'],
        ['53', 'Babelthuap'],
        ['G5', 'Kuwait City'],
        ['U5', 'Tabuk'],
        ['55', 'Kosrae Islands'],
        ['G7', 'Ali Al Salem'],
        ['U7', 'Souda Bay'],
        ['57', 'Truk'],
        ['H1', 'Bogota'],
        ['V1', 'Aviano'],
        ['59', 'Baghdad'],
        ['H3', 'Paramaribo'],
        ['V3', 'Sigonella'],
        ['61', 'Not Assigned'],
        ['H5', 'Rio de Janeiro'],
        ['V5', 'Naples'],
        ['63', 'Balad SE'],
        ['H7', 'Other South America'],
        ['V7', 'Brindisi'],
        ['65', 'Kirkuk'],
        ['IG', 'Inspector General'],
        ['W1', 'Olbia'],
        ['67', 'Iwakuni'],
        ['J1', 'Tal Afar'],
        ['W3', 'Akrotiri'],
        ['69', 'Pacific Express'],
        ['J3', 'Guatemala'],
        ['W5', 'Tel Aviv'],
        ['71', 'Osan'],
        ['J5', 'Tegucigalpa'],
        ['W7', 'Pristina'],
        ['73', 'Other Asia'],
        ['J7', 'Soto Cano'],
        ['X1', 'Thule'],
        ['75', 'Kimhae'],
        ['K1', 'SOUTHCOM Hub & Spoke'],
        ['X3', 'Not Assigned'],
        ['77', 'Kunsan'],
        ['K3', 'Belize'],
        ['X5', 'Lajes'],
        ['79', 'Kadena'],
        ['K5', 'San Jose'],
        ['X7', 'Bastion Airfield (Afghanistan)'],
        ['81', 'Yokota'],
        ['82', 'Yokota'],
        ['83', 'Yokota'],
        ['K7', 'Carib Aeromedical Evacuation'],
        ['Y1', 'Istres'],
        ['85', 'Itazuke (Fukuoka)'],
        ['L1', 'Antigua'],
        ['Y3', 'Doha'],
        ['87', 'Iwakuni'],
        ['L3', 'Ascension'],
        ['Y5', 'Al Udeid'],
        ['89', 'Misawa'],
        ['L5', 'Other Central America/Caribbean'],
        ['Y7', 'Kandahar'],
        ['91', 'Utaphao'],
        ['L7', 'Venezuela'],
        ['Z1', 'Tuzla'],
        ['93', 'Eareckson'],
        ['M1', 'Dominican Republic'],
        ['Z3', 'Taszar'],
        ['95', 'Eielson'],
        ['M3', 'Guantanamo'],
        ['Z5', 'Tirane'],
        ['97', 'Elmendorf'],
        ['M5', 'Haiti'],
        ['Z7', 'Bagram']
    ];

    chanelDecode(msnnum: string) {

        let msndetail = [];

        const char2 = [
            ['B', 'Channel Cargo'],
            ['J', 'Positioning to first onload'],
            ['K', 'Channel PAX'],
            ['L', 'Aeromedical Evacuation (AE)'],
            ['Q', 'Channel Mixed (PAX and cargo)'],
            ['V', 'Depositioning from offload to new mission or home station']
        ];

        const char3 = [
            ['A', 'Not Assigned*'],
            ['B', 'Distribution Channel Atlantic Region*'],
            ['C', 'Distribution Channel, Pacific Region*'],
            ['P', 'Not Assigned*'],
            ['E', 'CPX Channel missions as assigned by 18 AF/A3Y'],
            ['Q', 'CPX Channel missions as assigned by 18 AF/A3Y'],
            ['J', 'Channel missions supporting Contingency Operations. Coordinate ID with 618 AOC/XOP'],
            ['R', 'Channel missions supporting Contingency Operations. Coordinate ID with 618 AOC/XOP'],
            ['U', 'Channel missions supporting Contingency Operations. Coordinate ID with 618 AOC/XOP'],
            ['W', 'Channel missions supporting Contingency Operations. Coordinate ID with 618 AOC/XOP'],
            ['Y', 'Channel missions supporting Contingency Operations. Coordinate ID with 618 AOC/XOP'],
            ['Z', 'Channel missions supporting Contingency Operations. Coordinate ID with 618 AOC/XOP']
        ];

        const char8 = [
            ['E', 'Elmendorf'],
            ['A', 'An alternate routing of a channel mission to the same geographical turnaround station.'],
            ['C', 'An alternate routing of a channel mission to the same geographical turnaround station.'],
            ['D', 'An alternate routing of a channel mission to the same geographical turnaround station.'],
            ['G', 'Not Assigned'],
            ['B', 'Blood run mission'],
            ['H', 'Joint Base Pearl Harbor Hickam'],
            ['F', 'Not Assigned'],
            ['K', 'Kadena'],
            ['J', 'A channel traffic mission positioning for, or depositioning from a SAAM, Exercise, or OPLAN mission. The channel “J” mission will terminate or originate at the channel offload/onload station.'],
            ['M', 'Not Assigned'],
            ['L', 'Not Assigned'],
            ['N', 'Not Assigned'],
            ['P', 'A channel mission, which is scheduled for aerial refueling between point of origination and mission termination.'],
            ['R', 'Ramstein'],
            ['S', 'A channel mission with perishable rations.'],
            ['T', 'Not Assigned'],
            ['X', 'An extra section; scheduled after publication of the Wing Operations Plan (WOP) on an as required basis or for 618 AOC channel add-on mission.'],
            ['U', 'Not Assigned'],
            ['0', 'Miscellaneous placeholder or 1st character of ORI Chalk sequence number.'],
            ['V', 'Not Assigned'],
            ['1', '1st character of ORI Chalk sequence number'],
            ['2', '1st character of ORI Chalk sequence number'],
            ['3', '1st character of ORI Chalk sequence number'],
            ['4', '1st character of ORI Chalk sequence number'],
            ['5', '1st character of ORI Chalk sequence number'],
            ['6', '1st character of ORI Chalk sequence number'],
            ['7', '1st character of ORI Chalk sequence number'],
            ['8', '1st character of ORI Chalk sequence number'],
            ['9', '1st character of ORI Chalk sequence number'],
            ['Y', 'Not Assigned'],
        ];

        const char9 = [
            ['0', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['A', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['B', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['C', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['D', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['E', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['F', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['G', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['H', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['I', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['J', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['K', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['M', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['N', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['O', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['P', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['Q', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['R', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['L', 'Blood Run Mission'],
            ['S', 'Second shuttle downrange'],
            ['W', 'AMC gained ANG C-130 (not valid unless eighth character is an “F”).'],
            ['X', 'An extra section scheduled after publication of the Wing Operations Plan (WOP) on as-required basis.'],
            ['Z', 'AMC Fenced Channel Mission'],
            ['1', '2nd character of ORI Chalk sequence number'],
            ['2', '2nd character of ORI Chalk sequence number'],
            ['3', '2nd character of ORI Chalk sequence number'],
            ['4', '2nd character of ORI Chalk sequence number'],
            ['5', '2nd character of ORI Chalk sequence number'],
            ['6', '2nd character of ORI Chalk sequence number'],
            ['7', '2nd character of ORI Chalk sequence number'],
            ['8', '2nd character of ORI Chalk sequence number'],
            ['9', '2nd character of ORI Chalk sequence number'],
        ];

        for (let i of this.first) {
            if (i[0] === msnnum[0]) {
                msndetail[0] = [i[0], i[1]];
                break;
            } else if (msnnum[0]) {
                msndetail[0] = [msnnum[0], 'No Decode'];
            }
        };

        for (let i of char2) {
            if (i[0] === msnnum[1]) {
                msndetail[1] = [i[0], i[1]];
                break;
            } else if (msnnum[1]) {
                msndetail[1] = [msnnum[1], 'No Decode'];
            }
        };

        for (let i of char3) {
            if (i[0] === msnnum[2]) {
                msndetail[2] = [i[0], i[1]];
                break;
            } else if (msnnum[2]) {
                msndetail[2] = [msnnum[2], 'No Decode'];
            }
        };

        for (let i of this.orgunit) {
            if (i[0] === msnnum.substring(3, 5)) {
                msndetail[3] = [i[0], i[1]];
                break;
            } else if (msnnum.substring(3, 5)) {
                msndetail[3] = [msnnum.substring(3, 5), 'No Decode'];
            }
        };

        for (let i of this.route) {
            if (i[0] === msnnum.substring(5, 7)) {
                msndetail[4] = [i[0], i[1]];
                break;
            } else if (msnnum.substring(5, 7)) {
                msndetail[4] = [msnnum.substring(5, 7), 'No Decode'];
            }
        };

        for (let i of char8) {
            if (i[0] === msnnum[7]) {
                msndetail[5] = [i[0], i[1]];
                break;
            } else if (msnnum[7]) {
                msndetail[5] = [msnnum[7], 'No Decode'];
            }
        };

        for (let i of char9) {
            if (i[0] === msnnum[8]) {
                msndetail[6] = [i[0], i[1]];
                break;
            } else if (msnnum[8]) {
                msndetail[6] = [msnnum[8], 'No Decode'];
            }
        };

        if (msnnum.substring(9, 12)) {
            msndetail[7] = [msnnum.substring(9, 12), 'Day of Year'];
        }
        return msndetail;
    };

    airevCONUSDecode(msnnum: string) {
        let msndetail = [];

        const char2 = [
            ['J', 'Positioning to first onload'],
            ['L', 'Aeromedical Evacuation (AE)'],
            ['V', 'Depositioning from offload to new mission or home station']
        ];

        const char3 = [
            ['A', 'Requirements AIREVAC, Atlantic Region'],
            ['B', 'Frequency AIREVAC, Atlantic Region'],
            ['C', 'Frequency AIREVAC, Pacific Region'],
            ['D', 'OSA Support AIREVAC Mission'],
            ['M', 'Identifies SAAM AIREVAC Mission'],
            ['N', 'Applicable to all miscellaneous missions except ORIs and AMC OSAs.'],
            ['P', 'Requirements AIREVAC, Pacific Region'],
            ['E', 'CPX AIREVAC missions as assigned by 18 AF/A3Y'],
            ['Q', 'CPX AIREVAC missions as assigned by 18 AF/A3Y]'],
            ['J', 'AIREVAC missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
            ['R', 'AIREVAC missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
            ['U', 'AIREVAC missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
            ['W', 'AIREVAC missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
            ['Y', 'AIREVAC missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
            ['Z', 'AIREVAC missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
        ];

        const conus = [
            ['1', 'Andrews'],
            ['2', 'Keesler'],
            ['3', 'Northern Tier'],
            ['4', 'Travis'],
            ['5', 'Kelly'],
            ['6', 'Scott'],
            ['7', 'Near Offshore'],
            ['8', 'Other'],
            ['9', 'Other']
        ];

        const day = [
            ['A', 'Monday'],
            ['B', 'Tuesday'],
            ['C', 'Wednesday'],
            ['D', 'Thursday'],
            ['E', 'Friday'],
            ['F', 'Saturday'],
            ['G', 'Sunday']
        ];

        const char8 = [
            ['E', 'Elmendorf'],
            ['A', 'An alternate routing of a channel mission to the same geographical turnaround station.'],
            ['C', 'An alternate routing of a channel mission to the same geographical turnaround station.'],
            ['D', 'An alternate routing of a channel mission to the same geographical turnaround station.'],
            ['G', 'Not Assigned'],
            ['B', 'Blood run mission'],
            ['H', 'Joint Base Pearl Harbor Hickam'],
            ['F', 'Not Assigned'],
            ['K', 'Kadena'],
            ['J', 'A channel traffic mission positioning for, or depositioning from a SAAM, Exercise, or OPLAN mission. The channel “J” mission will terminate or originate at the channel offload/onload station.'],
            ['M', 'Not Assigned'],
            ['L', 'Not Assigned'],
            ['N', 'Not Assigned'],
            ['P', 'A channel mission, which is scheduled for aerial refueling between point of origination and mission termination.'],
            ['R', 'Ramstein'],
            ['S', 'A channel mission with perishable rations.'],
            ['T', 'Not Assigned'],
            ['X', 'An extra section; scheduled after publication of the Wing Operations Plan (WOP) on an as required basis or for 618 AOC channel add-on mission.'],
            ['U', 'Not Assigned'],
            ['0', 'Miscellaneous placeholder or 1st character of ORI Chalk sequence number.'],
            ['V', 'Not Assigned'],
            ['1', '1st character of ORI Chalk sequence number'],
            ['2', '1st character of ORI Chalk sequence number'],
            ['3', '1st character of ORI Chalk sequence number'],
            ['4', '1st character of ORI Chalk sequence number'],
            ['5', '1st character of ORI Chalk sequence number'],
            ['6', '1st character of ORI Chalk sequence number'],
            ['7', '1st character of ORI Chalk sequence number'],
            ['8', '1st character of ORI Chalk sequence number'],
            ['9', '1st character of ORI Chalk sequence number'],
            ['Y', 'Not Assigned'],
        ];

        const char9 = [
            ['0', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['A', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['B', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['C', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['D', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['E', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['F', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['G', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['H', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['I', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['J', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['K', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['M', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['N', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['O', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['P', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['Q', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['R', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['L', 'Blood Run Mission'],
            ['S', 'Second shuttle downrange'],
            ['W', 'AMC gained ANG C-130 (not valid unless eighth character is an “F”).'],
            ['X', 'An extra section scheduled after publication of the Wing Operations Plan (WOP) on as-required basis.'],
            ['Z', 'AMC Fenced Channel Mission'],
            ['1', '2nd character of ORI Chalk sequence number'],
            ['2', '2nd character of ORI Chalk sequence number'],
            ['3', '2nd character of ORI Chalk sequence number'],
            ['4', '2nd character of ORI Chalk sequence number'],
            ['5', '2nd character of ORI Chalk sequence number'],
            ['6', '2nd character of ORI Chalk sequence number'],
            ['7', '2nd character of ORI Chalk sequence number'],
            ['8', '2nd character of ORI Chalk sequence number'],
            ['9', '2nd character of ORI Chalk sequence number'],
        ];

        for (let i of this.first) {
            if (i[0] === msnnum[0]) {
                msndetail[0] = [i[0], i[1]];
                break;
            } else if (msnnum[0]) {
                msndetail[0] = [msnnum[0], 'No Decode'];
            }
        };

        for (let i of char2) {
            if (i[0] === msnnum[1]) {
                msndetail[1] = [i[0], i[1]];
                break;
            } else if (msnnum[1]) {
                msndetail[1] = [msnnum[1], 'No Decode'];
            }
        };

        for (let i of char3) {
            if (i[0] === msnnum[2]) {
                msndetail[2] = [i[0], i[1]];
                break;
            } else if (msnnum[2]) {
                msndetail[2] = [msnnum[2], 'No Decode'];
            }
        };

        for (let i of this.orgunit) {
            if (i[0] === msnnum.substring(3, 5)) {
                msndetail[3] = [i[0], i[1]];
                break;
            } else if (msnnum.substring(3, 5)) {
                msndetail[3] = [msnnum.substring(3, 5), 'No Decode'];
            }
        };

        for (let i of conus) {
            if (i[0] === msnnum[5]) {
                msndetail[4] = [i[0], i[1]];
                break;
            } else if (msnnum[5]) {
                msndetail[4] = [msnnum[5], 'No Decode'];
            }
        };

        for (let i of conus) {
            if (i[0] === msnnum[6]) {
                msndetail[5] = [i[0], i[1]];
                break;
            } else if (msnnum[6]) {
                msndetail[5] = [msnnum[6], 'No Decode'];
            }
        };

        for (let i of conus) {
            if (i[0] === msnnum[7]) {
                msndetail[6] = [i[0], i[1]];
                break;
            } else if (msnnum[7]) {
                msndetail[6] = [msnnum[7], 'No Decode'];
            }
        };

        for (let i of day) {
            if (i[0] === msnnum[8]) {
                msndetail[7] = [i[0], i[1]];
                break;
            } else if (msnnum[8]) {
                msndetail[7] = [msnnum[8], 'No Decode'];
            }
        };

        if (msnnum.substring(9, 12)) {
            msndetail[8] = [msnnum.substring(9, 12), 'Day of Year'];
        }
        return msndetail;
    };

    airevOCONUSDecode(msnnum: string) {

        let msndetail = [];

        const char2 = [
            ['J', 'Positioning to first onload'],
            ['L', 'Aeromedical Evacuation (AE)'],
            ['V', 'Depositioning from offload to new mission or home station']
        ];

        const char3 = [
            ['A', 'Requirements AIREVAC, Atlantic Region'],
            ['B', 'Frequency AIREVAC, Atlantic Region'],
            ['C', 'Frequency AIREVAC, Pacific Region'],
            ['D', 'OSA Support AIREVAC Mission'],
            ['M', 'Identifies SAAM AIREVAC Mission'],
            ['N', 'Applicable to all miscellaneous missions except ORIs and AMC OSAs.'],
            ['P', 'Requirements AIREVAC, Pacific Region'],
            ['E', 'CPX AIREVAC missions as assigned by 18 AF/A3Y'],
            ['Q', 'CPX AIREVAC missions as assigned by 18 AF/A3Y]'],
            ['J', 'AIREVAC missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
            ['R', 'AIREVAC missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
            ['U', 'AIREVAC missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
            ['W', 'AIREVAC missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
            ['Y', 'AIREVAC missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
            ['Z', 'AIREVAC missions supporting Contingency Operations as assigned by 618 AOC/XOP'],
        ];

        const char8 = [
            ['E', 'Elmendorf'],
            ['A', 'An alternate routing of a channel mission to the same geographical turnaround station.'],
            ['C', 'An alternate routing of a channel mission to the same geographical turnaround station.'],
            ['D', 'An alternate routing of a channel mission to the same geographical turnaround station.'],
            ['G', 'Not Assigned'],
            ['B', 'Blood run mission'],
            ['H', 'Joint Base Pearl Harbor Hickam'],
            ['F', 'Not Assigned'],
            ['K', 'Kadena'],
            ['J', 'A channel traffic mission positioning for, or depositioning from a SAAM, Exercise, or OPLAN mission. The channel “J” mission will terminate or originate at the channel offload/onload station.'],
            ['M', 'Not Assigned'],
            ['L', 'Not Assigned'],
            ['N', 'Not Assigned'],
            ['P', 'A channel mission, which is scheduled for aerial refueling between point of origination and mission termination.'],
            ['R', 'Ramstein'],
            ['S', 'A channel mission with perishable rations.'],
            ['T', 'Not Assigned'],
            ['X', 'An extra section; scheduled after publication of the Wing Operations Plan (WOP) on an as required basis or for 618 AOC channel add-on mission.'],
            ['U', 'Not Assigned'],
            ['0', 'Miscellaneous placeholder or 1st character of ORI Chalk sequence number.'],
            ['V', 'Not Assigned'],
            ['1', '1st character of ORI Chalk sequence number'],
            ['2', '1st character of ORI Chalk sequence number'],
            ['3', '1st character of ORI Chalk sequence number'],
            ['4', '1st character of ORI Chalk sequence number'],
            ['5', '1st character of ORI Chalk sequence number'],
            ['6', '1st character of ORI Chalk sequence number'],
            ['7', '1st character of ORI Chalk sequence number'],
            ['8', '1st character of ORI Chalk sequence number'],
            ['9', '1st character of ORI Chalk sequence number'],
            ['Y', 'Not Assigned'],
        ];

        const char9 = [
            ['0', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['A', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['B', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['C', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['D', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['E', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['F', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['G', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['H', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['I', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['J', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['K', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['M', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['N', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['O', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['P', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['Q', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['R', 'Used when more than one schedule is needed to support a mission. First mission identifier will use a 0 (zero) in this character, the second an A, the third a B, and so on. This allows for like missions, but no duplicates.'],
            ['L', 'Blood Run Mission'],
            ['S', 'Second shuttle downrange'],
            ['W', 'AMC gained ANG C-130 (not valid unless eighth character is an “F”).'],
            ['X', 'An extra section scheduled after publication of the Wing Operations Plan (WOP) on as-required basis.'],
            ['Z', 'AMC Fenced Channel Mission'],
            ['1', '2nd character of ORI Chalk sequence number'],
            ['2', '2nd character of ORI Chalk sequence number'],
            ['3', '2nd character of ORI Chalk sequence number'],
            ['4', '2nd character of ORI Chalk sequence number'],
            ['5', '2nd character of ORI Chalk sequence number'],
            ['6', '2nd character of ORI Chalk sequence number'],
            ['7', '2nd character of ORI Chalk sequence number'],
            ['8', '2nd character of ORI Chalk sequence number'],
            ['9', '2nd character of ORI Chalk sequence number'],
        ];

        for (let i of this.first) {
            if (i[0] === msnnum[0]) {
                msndetail[0] = [i[0], i[1]];
                break;
            } else if (msnnum[0]) {
                msndetail[0] = [msnnum[0], 'No Decode'];
            }
        };

        for (let i of char2) {
            if (i[0] === msnnum[1]) {
                msndetail[1] = [i[0], i[1]];
                break;
            } else if (msnnum[1]) {
                msndetail[1] = [msnnum[1], 'No Decode'];
            }
        };

        for (let i of char3) {
            if (i[0] === msnnum[2]) {
                msndetail[2] = [i[0], i[1]];
                break;
            } else if (msnnum[2]) {
                msndetail[2] = [msnnum[2], 'No Decode'];
            }
        };

        for (let i of this.orgunit) {
            if (i[0] === msnnum.substring(3, 5)) {
                msndetail[3] = [i[0], i[1]];
                break;
            } else if (msnnum.substring(3, 5)) {
                msndetail[3] = [msnnum.substring(3, 5), 'No Decode'];
            }
        };

        for (let i of this.route) {
            if (i[0] === msnnum.substring(5, 7)) {
                msndetail[4] = [i[0], i[1]];
                break;
            } else if (msnnum.substring(5, 7)) {
                msndetail[4] = [msnnum.substring(5, 7), 'No Decode'];
            }
        };

        for (let i of char8) {
            if (i[0] === msnnum[7]) {
                msndetail[5] = [i[0], i[1]];
                break;
            } else if (msnnum[7]) {
                msndetail[5] = [msnnum[7], 'No Decode'];
            }
        };

        for (let i of char9) {
            if (i[0] === msnnum[8]) {
                msndetail[6] = [i[0], i[1]];
                break;
            } else if (msnnum[8]) {
                msndetail[6] = [msnnum[8], 'No Decode'];
            }
        };

        if (msnnum.substring(9, 12)) {
            msndetail[7] = [msnnum.substring(9, 12), 'Day of Year'];
        }
        return msndetail;
    };

    saamDecode(msnnum: string) {
        let msndetail = [];

        const char2 = [
            ['A', 'Onload to Offload'],
            ['J', 'Positioning to first onload'],
            ['L', 'Aeromedical Evacuation (AE)'],
            ['V', 'Depositioning from offload to new mission or home station'],
            ['W', 'Equipment Support (Identifies mission as SAAM support)']
        ];

        const char3 = [
            ['M', 'Identifies SAAM Mission'],
            ['T', 'Identifies Operation Test and Evaluation (OT & E) SAAM Approved by HQ AMC/A2XP']
        ];


        for (let i of this.first) {
            if (i[0] === msnnum[0]) {
                msndetail[0] = [i[0], i[1]];
                break;
            } else if (msnnum[0]) {
                msndetail[0] = [msnnum[0], 'No Decode'];
            }
        };

        for (let i of char2) {
            if (i[0] === msnnum[1]) {
                msndetail[1] = [i[0], i[1]];
                break;
            } else if (msnnum[1]) {
                msndetail[1] = [msnnum[1], 'No Decode'];
            }
        };

        for (let i of char3) {
            if (i[0] === msnnum[2]) {
                msndetail[2] = [i[0], i[1]];
                break;
            } else if (msnnum[2]) {
                msndetail[2] = [msnnum[2], 'No Decode'];
            }
        };

        if (msnnum.substring(3, 8)) {
            msndetail[3] = [msnnum.substring(3, 8), 'SAAM Number'];
        }

        if (msnnum[8]) {
            msndetail[4] = [msnnum[8], 'Sequence Number'];
        }

        if (msnnum.substring(9, 12)) {
            msndetail[5] = [msnnum.substring(9, 12), 'Day of Year'];
        }
        return msndetail;
    };

    jaattDecode(msnnum: string) {
        let msndetail = [];

        const char2 = [
            ['J', 'Positioning to first onload'],
            ['L', 'Aeromedical Evacuation'],
            ['M', 'Onload to Offload'],
            ['P', 'Aerial Refueling (AR)'],
            ['V', 'Depositioning from offload to new mission or home station']
        ];

        const char3 = [
            ['G', 'Identifies JA/ATT Mission'],
        ];

        for (let i of this.first) {
            if (i[0] === msnnum[0]) {
                msndetail[0] = [i[0], i[1]];
                break;
            } else if (msnnum[0]) {
                msndetail[0] = [msnnum[0], 'No Decode'];
            }
        };

        for (let i of char2) {
            if (i[0] === msnnum[1]) {
                msndetail[1] = [i[0], i[1]];
                break;
            } else if (msnnum[1]) {
                msndetail[1] = [msnnum[1], 'No Decode'];
            }
        };

        for (let i of char3) {
            if (i[0] === msnnum[2]) {
                msndetail[2] = [i[0], i[1]];
                break;
            } else if (msnnum[2]) {
                msndetail[2] = [msnnum[2], 'No Decode'];
            }
        };

        if (msnnum[3]) {
            msndetail[3] = [msnnum[3], 'User ID'];
        }

        if (msnnum.substring(4, 7)) {
            msndetail[4] = [msnnum.substring(4, 7), 'OPORD Sequence Number'];
        }

        if (msnnum.substring(7, 9)) {
            msndetail[5] = [msnnum.substring(7, 9), 'Sortie Sequence Number'];
        }

        if (msnnum.substring(9, 12)) {
            msndetail[6] = [msnnum.substring(9, 12), 'Day of Year'];
        }
        return msndetail;
    };

    samDecode(msnnum: string) {
        let msndetail = [];

        const char2 = [
            ['D', 'Support(move tail for Depot MX or position tail to homestation from mission termination point)'],
            ['E', 'Training: non-local flights (“Off-Station Trainers” including ORI or ORE “fly-away” sorties)'],
            ['F', 'Onload to offload'],
            ['J', 'Position to onload'],
            ['U', 'Training: Local Flights (unilateral AF training, unit training and evaluation, tactical airlift/receiver aerial refueling training to include home station “Round-robin” sorties)'],
            ['V', 'Depositioning from offload']
        ];

        const char3 = [
            ['E', 'Army'],
            ['L', '89 AW'],
            ['F', 'AF'],
            ['M', 'Marine'],
            ['N', 'Navy'],
        ];

        const char4 = [
            ['A', 'AFRICOM'],
            ['C', 'CENTCOM'],
            ['E', 'EUCOM'],
            ['G', 'Gov Support(Service/Unit/Agency Scheduled.)'],
            ['N', 'NORTHCOM'],
            ['P', 'PACOM'],
            ['S', 'SOUTHCOM'],
            ['U', 'USTRANSCOM'],
            ['T', 'MAJCOM Training Events Without PAX Onboard']
        ];

        for (let i of this.first) {
            if (i[0] === msnnum[0]) {
                msndetail[0] = [i[0], i[1]];
                break;
            } else if (msnnum[0]) {
                msndetail[0] = [msnnum[0], 'No Decode'];
            }
        };

        for (let i of char2) {
            if (i[0] === msnnum[1]) {
                msndetail[1] = [i[0], i[1]];
                break;
            } else if (msnnum[1]) {
                msndetail[1] = [msnnum[1], 'No Decode'];
            }
        };

        for (let i of char3) {
            if (i[0] === msnnum[2]) {
                msndetail[2] = [i[0], i[1]];
                break;
            } else if (msnnum[2]) {
                msndetail[2] = [msnnum[2], 'No Decode'];
            }
        };

        for (let i of char4) {
            if (i[0] === msnnum[3]) {
                msndetail[3] = [i[0], i[1]];
                break;
            } else if (msnnum[4]) {
                msndetail[3] = [msnnum[3], 'No Decode'];
            }
        };
        if (msnnum.substring(4, 8)) {
            msndetail[4] = [msnnum.substring(4, 9), '5-digit Avisource (or CVAM system of record) number'];
        }
        if (msnnum.substring(9, 12)) {
            msndetail[5] = [msnnum.substring(9, 12), 'Day of Year'];
        }
        return msndetail;
    };

    osaDecode(msnnum: string) {

        const char2 = [
            ['D', 'Support'],
            ['E', 'Training (Unilateral Air Force other than local including route familiarization)'],
            ['L', 'OSA AE/PACAF (O&M AE)'],
            ['U', 'Local Flights (includes unilateral Air Force training, unit training and evaluation, tactical airlift/receiver aerial refueling training to include home station “Round-robin “sorties)']
        ];
        const char3 = [
            ['D', 'Applicable only to OSA support missions.'],
            ['E', 'Deploy/Redeploy OSA acft, to include “off-station missions”'],
            ['N', 'Applicable to all miscellaneous missions except ORIs and AMC OSAs.']
        ];
        const pchar45 = [
            ['18', '374 AW,C-12J'],
            ['71', '3 WG,C-12F'],
            ['73', '15 AW,C-37/C-40']
        ];
        const pchar6 = [
            ['D', 'Joint Base Pearl Harbor Hickam AFB HI'],
            ['H', 'Elmendorf AFB'],
            ['J', 'Unused'],
            ['S', 'Army, Navy, Marine PACOM Component-provided aircraft'],
            ['Y', 'Yokota AB']
        ];
        const pchar7 = [
            ['1', 'Yokota'],
            ['J', 'Malaysia (General)'],
            ['2', 'Osan'],
            ['K', 'Thailand (General)'],
            ['3', 'Kadena/Okinawa'],
            ['L', 'Elmendorf'],
            ['4', 'Misawa'],
            ['M', 'Eielson'],
            ['5', 'Andersen/Guam'],
            ['N', 'Alaska (LRRS Support)'],
            ['6', 'Kunsan'],
            ['O', 'Alaska (General)'],
            ['7', 'Gimhae'],
            ['P', 'Wainwright AAF'],
            ['8', 'Chitose'],
            ['Q', 'Allen AAF'],
            ['9', 'Iwakuni'],
            ['R', 'Fairbanks Int’l.'],
            ['A', 'Japan (General)'],
            ['S', 'Galena'],
            ['B', 'Korea (General)'],
            ['T', 'King Salmon'],
            ['C', 'Southeast Asia (General)'],
            ['U', 'Cold Bay'],
            ['D', 'AustralAsia (General)'],
            ['V', 'Barrow/Wiley Post'],
            ['E', 'South Asia/IO (General)'],
            ['W', 'Joint Base Pearl Harbor Hickam /Hawaii (General)'],
            ['F', 'Micronesia (General)'],
            ['X', 'Conus (General)'],
            ['G', 'Manila/Clark'],
            ['Y', 'Canada (General)'],
            ['H', 'Philippines (General)'],
            ['Z', 'East Europe & Asia (General)'],
            ['I', 'Singapore (General)']
        ];
        const pchar8 = [
            ['A', 'Operational Support'],
            ['Q', 'Attached Pilot Training/Check (S-3)'],
            ['C', 'SAR, Urgent Medical (S-5)'],
            ['T', 'Line Trainer/Familiarization'],
            ['D', 'JOPES Pax/Cargo Missions'],
            ['U', 'Assigned Pilot Training Checks (S-7)'],
            ['P', 'Acft Delivery (0-3)'],
            ['X', 'Exercise'],
            ['Z', 'Functional Check Flight (0-8)']
        ];
        const pchar9 = [
            ['0', 'First daily mission for each unit'],
            ['A', 'Subsequent daily missions'],
            ['B', 'Subsequent daily missions'],
            ['C', 'Subsequent daily missions'],
            ['D', 'Subsequent daily missions'],
            ['E', 'Subsequent daily missions'],
            ['F', 'Subsequent daily missions'],
            ['G', 'Subsequent daily missions'],
            ['H', 'Subsequent daily missions'],
            ['I', 'Subsequent daily missions'],
            ['J', 'Subsequent daily missions']
        ];
        const achar4567 = [
            ['EAA7', 'Andrews (457 AS)'],
            ['EBA7', 'Andrews (201 AS)'],
            ['EBB7', 'Bradley (103 AW)'],
            ['EAC7', 'Wright Patterson (47 ALF)'],
            ['WAB8', 'Scott (458 AS)'],
            ['WAC8', 'Scott (311 AS)'],
            ['WBA8', 'Peterson (200 AS)'],
            ['WBB1', 'Scott (73 AS & 54 AS)'],
            ['WBC8', 'Fargo (119 WG)']
        ];
        const achar8 = [
            ['C', 'C-40'],
            ['L', 'C-21'],
            ['M', 'Unused'],
            ['N', 'C-9'],
            ['T', 'KC-135'],
            ['Y', 'C-22'],
            ['X', 'T-43']
        ];
        const achar9 = [
            ['0', 'First daily mission for each unit'],
            ['A', 'Subsequent daily missions'],
            ['B', 'Subsequent daily missions'],
            ['C', 'Subsequent daily missions'],
            ['D', 'Subsequent daily missions'],
            ['E', 'Subsequent daily missions'],
            ['F', 'Subsequent daily missions'],
            ['G', 'Subsequent daily missions'],
            ['H', 'Subsequent daily missions'],
            ['I', 'Subsequent daily missions'],
            ['J', 'Subsequent daily missions'],
            ['K', 'Subsequent daily missions'],
            ['L', 'Subsequent daily missions'],
            ['M', 'Subsequent daily missions'],
            ['N', 'Subsequent daily missions'],
            ['S', 'Service Secretaries Controlled Aircraft'],
            ['X', 'Central/South America'],
            ['Z', 'Alert mission']
        ];

        let msndetail = [];

        for (let i of this.first) {
            if (i[0] === msnnum[0]) {
                msndetail[0] = [i[0], i[1]];
                break;
            } else if (msnnum[0]) {
                msndetail[0] = [msnnum[0], 'No Decode'];
            }
        };

        for (let i of char2) {
            if (i[0] === msnnum[1]) {
                msndetail[1] = [i[0], i[1]];
                break;
            } else if (msnnum[1]) {
                msndetail[1] = [msnnum[1], 'No Decode'];
            }
        };

        for (let i of char3) {
            if (i[0] === msnnum[2]) {
                msndetail[2] = [i[0], i[1]];
                break;
            } else if (msnnum[2]) {
                msndetail[2] = [msnnum[2], 'No Decode'];
            }
        };


        for (let i of achar4567) {
            if (i[0] === msnnum.substring(3, 7)) {
                msndetail[3] = [i[0], i[1]];

                for (let i2 of achar8) {
                    if (i2[0] === msnnum[7]) {
                        msndetail[4] = [i2[0], i2[1]];
                        break;
                    } else if (msnnum[7]) {
                        msndetail[4] = [msnnum[7], 'No Decode'];
                    }
                };

                for (let i3 of achar9) {
                    if (i3[0] === msnnum[8]) {
                        msndetail[5] = [i3[0], i3[1]];
                        break;
                    } else if (msnnum[8]) {
                        msndetail[5] = [msnnum[8], 'No Decode'];
                    }
                };
                if (msnnum.substring(9, 12)) {
                    msndetail[6] = [msnnum.substring(9, 12), 'Day of Year'];
                }
                break;
            }
        };

        for (let i of pchar45) {
            if (i[0] === msnnum.substring(3, 5)) {
                msndetail[3] = [i[0], i[1]];

                for (let i2 of pchar6) {
                    if (i2[0] === msnnum[5]) {
                        msndetail[4] = [i2[0], i2[1]];
                        break;
                    } else if (msnnum[5]) {
                        msndetail[4] = [msnnum[5], 'No Decode'];
                    }
                }
                for (let i3 of pchar7) {
                    if (i3[0] === msnnum[6]) {
                        msndetail[5] = [i3[0], i3[1]];
                        break;
                    } else if (msnnum[6]) {
                        msndetail[5] = [msnnum[6], 'No Decode'];
                    }
                }

                for (let i4 of pchar8) {
                    if (i4[0] === msnnum[7]) {
                        msndetail[6] = [i4[0], i4[1]];
                        break;
                    } else if (msnnum[7]) {
                        msndetail[6] = [msnnum[7], 'No Decode'];
                    }
                }

                for (let i5 of pchar9) {
                    if (i5[0] === msnnum[8]) {
                        msndetail[7] = [i5[0], i5[1]];
                        break;
                    } else if (msnnum[8]) {
                        msndetail[7] = [msnnum[8], 'No Decode'];
                    }
                }
                if (msnnum.substring(9, 12)) {
                    msndetail[6] = [msnnum.substring(9, 12), 'Day of Year'];
                }
            }
        };
        return msndetail;
    };

    coeDecode(msnnum: string) {

        let msndetail = [];

        const char2 = [
            ['M', 'Onload to Offload'],
            ['P', 'Aerial Refueling'],
            ['J', 'Positioning to first onload'],
            ['V', 'Depositioning from offload to new mission or home station'],
            ['L', 'Aeromedical Evacuation (AE)'],
            ['B', 'Contingency Channel Cargo'],
            ['Q', 'Contingency Channel Mixed'],
            ['K', 'Contingency Channel Passenger']
        ];

        const char3 = [
            ['X', 'CJCS Approved Exercises (live missions)'],
            ['J', 'Contingency Mission as Assigned by 618 AOC/XOP'],
            ['R', 'Contingency Mission as Assigned by 618 AOC/XOP'],
            ['U', 'Contingency Mission as Assigned by 618 AOC/XOP'],
            ['W', 'Contingency Mission as Assigned by 618 AOC/XOP'],
            ['Y', 'Contingency Mission as Assigned by 618 AOC/XOP'],
            ['Z', 'Contingency Mission as Assigned by 618 AOC/XOP'],
            ['E', 'Command Post Exercise (CPX) as assigned by 18 AF/A3Y'],
            ['Q', 'Command Post Exercise (CPX) as assigned by 18 AF/A3Y'],
        ];

        const char4 = [
            ['A', 'Army'],
            ['C', 'Foreign Government Support'],
            ['F', 'Air Force'],
            ['H', 'Humanitarian Relief Operations(movement of patients via AE or airland movement of evacuees)'],
            ['J', 'Joint (SOCOM, CENTCOM, NORTHCOM, EUCOM, SOUTHCOM, STRATCOM, PACOM, FORSCOM, TRANSCOM)'],
            ['M', 'Marine'],
            ['N', 'Navy'],
            ['P', 'Coast Guard'],
            ['S', 'AMC Support (AMD, CRG, MST, etc.)']
        ];

        for (let i of this.first) {
            if (i[0] === msnnum[0]) {
                msndetail[0] = [i[0], i[1]];
                break;
            } else if (msnnum[0]) {
                msndetail[0] = [msnnum[0], 'No Decode'];
            }
        };

        for (let i of char2) {
            if (i[0] === msnnum[1]) {
                msndetail[1] = [i[0], i[1]];
                break;
            } else if (msnnum[1]) {
                msndetail[1] = [msnnum[1], 'No Decode'];
            }
        };

        for (let i of char3) {
            if (i[0] === msnnum[2]) {
                msndetail[2] = [i[0], i[1]];
                break;
            } else if (msnnum[2]) {
                msndetail[2] = [msnnum[2], 'No Decode'];
            }
        };

        for (let i of char4) {
            if (i[0] === msnnum[3]) {
                msndetail[3] = [i[0], i[1]];
                break;
            } else if (msnnum[3]) {
                msndetail[3] = [msnnum[3], 'No Decode'];
            }
        };

        if (msnnum.substring(4, 7)) {
            msndetail[4] = [msnnum.substring(4, 7), 'Series Number'];
        }

        if (msnnum.substring(7, 9)) {
            msndetail[5] = [msnnum.substring(7, 9), 'Excercise Suffix'];
        }

        if (msnnum.substring(9, 12)) {
            msndetail[6] = [msnnum.substring(9, 12), 'Day of Year'];
        }
        return msndetail;
    };

    aarDecode(msnnum: string) {
        let msndetail = [];

        const char2 = [
            ['J', 'Positioning'],
            ['P', 'Active Air Refueling'],
            ['V', 'Depositioning'],
            ['M', 'Deployment/Redeployment']
        ];

        const char3 = [
            ['H', 'HQ AMC-tasked missions (excludes JCS exercise or Contingency)'],
            ['X', 'Priority 2 missions supporting CJCS exercises (as assigned by 618 AOC/XOP)'],
            ['Z', 'Contingency (Priority 1 and 2) missions * Actual character for different contingencies assigned by 618 AOC/XOP (https://xop-web.scott.af.mil/documents)'],
            ['W', 'Contingency (Priority 1 and 2) missions * Actual character for different contingencies assigned by 618 AOC/XOP (https://xop-web.scott.af.mil/documents)'],
            ['J', 'Contingency (Priority 1 and 2) missions * Actual character for different contingencies assigned by 618 AOC/XOP (https://xop-web.scott.af.mil/documents)'],
            ['U', 'Contingency (Priority 1 and 2) missions * Actual character for different contingencies assigned by 618 AOC/XOP (https://xop-web.scott.af.mil/documents)'],
            ['R', 'Contingency (Priority 1 and 2) missions * Actual character for different contingencies assigned by 618 AOC/XOP (https://xop-web.scott.af.mil/documents)'],
            ['Y', 'Contingency (Priority 1 and 2) missions * Actual character for different contingencies assigned by 618 AOC/XOP (https://xop-web.scott.af.mil/documents)'],
            ['A', 'Priority 3 and 4 USTRANSCOM/AMC validated missions (including all Priority 3 & 4 Business Efforts). For AFRC units, this only applies when the first character is “Z”'],
            ['N', 'Unit generated priority 3, 4 missions [STOP! AMC and AMC-gained units: If 2nd character is E, S, or U use Chapter 11 (for ANG), Chapter 13 (AMC), or Chapter 14 (AFRC)]'],
            ['M', 'Not Assigned']
        ];

        const nonAmcRcvr = [
            ['CLF', 'Navy Atlantic Fleet'],
            ['CPF', 'Navy Pacific Fleet'],
            ['MFL', 'Marine Corps Atlantic Fleet'],
            ['MFP', 'Marine Corps Pacific Fleet'],
            ['ATD', 'Foreign Military Sales (FMS) Australia'],
            ['BAD', 'Foreign Military Sales (FMS) Bahrain'],
            ['BED', 'Foreign Military Sales (FMS) Belgium'],
            ['CID', 'Foreign Military Sales (FMS) Chile'],
            ['CND', 'Foreign Military Sales (FMS) Canada'],
            ['DED', 'Foreign Military Sales (FMS) Denmark'],
            ['EGD', 'Foreign Military Sales (FMS) Egypt'],
            ['GYD', 'Foreign Military Sales (FMS) Germany'],
            ['GRD', 'Foreign Military Sales (FMS) Greece'],
            ['ISD', 'Foreign Military Sales (FMS) Israel'],
            ['ITD', 'Foreign Military Sales (FMS) Italy'],
            ['JAD', 'Foreign Military Sales (FMS) Japan'],
            ['JOD', 'Foreign Military Sales (FMS) Jordan'],
            ['K7D', 'Foreign Military Sales (FMS) NATO E3 (NATO & UK)'],
            ['NED', 'Foreign Military Sales (FMS) Netherlands'],
            ['NOD', 'Foreign Military Sales (FMS) Norway'],
            ['MUD', 'Foreign Military Sales (FMS) Oman'],
            ['POD', 'Foreign Military Sales (FMS) Poland'],
            ['PTD', 'Foreign Military Sales (FMS) Portugal'],
            ['SRD', 'Foreign Military Sales (FMS) Saudi Arabia'],
            ['SND', 'Foreign Military Sales (FMS) Singapore'],
            ['THD', 'Foreign Military Sales (FMS) Thailand'],
            ['AED', 'Foreign Military Sales (FMS) United Arab Emirates'],
            ['UKO', 'Foreign Military Sales (FMS) United Kingdom'],
            ['WTA', 'Homeland Defense (Alert)'],
            ['WTC', 'Homeland Defense (Scheduled)'],
            ['WTP', 'Homeland Defense (Alaska NORAD)'],
            ['XRF', 'RED FLAG'],
            ['XGF', 'GREEN FLAG'],
            ['XMF', 'MAPLE FLAG'],
            ['XBF', 'BLUE FLAG'],
            ['XNA', 'NATO Exercise Employment'],
            ['XPE', 'PACAF Exercise Employment'],
            ['XUE', 'USAFE Exercise Employment']
        ];

        const nonAmcRcvrActivity = [
            ['A', 'CORONET AEF deployment'],
            ['P', 'Homeland Defense'],
            ['B', 'Bomber'],
            ['Q', 'Foreign Military Sales'],
            ['C', 'Business Effort for non-test A/R support'],
            ['R', 'RC-135 (BusyRelay, Cal. Sortie)'],
            ['D', 'CORONET Dual Role support'],
            ['S', 'CORONET South'],
            ['E', 'CORONET East'],
            ['T', 'Test Aircraft Support'],
            ['F', 'Fighters (US only)'],
            ['U', 'Priority 3,4,5 and “Misc”'],
            ['J', 'Counter Drug Support'],
            ['V', 'DV Support'],
            ['K', 'NATO Support'],
            ['W', 'CORONET West'],
            ['L', 'ISR/C2 Aircraft (E3, E4, E6, E8, EC130)'],
            ['X', 'PONY EXPRESS'],
            ['M', 'Special Operations'],
            ['Z', '“High visibility” not listed above'],
            ['N', 'CORONET North']
        ];

        const reDepTtf = [
            ['A', 'Eielson AFB, Alaska'],
            ['N', 'EUCOM General'],
            ['B', 'NGB Assigned'],
            ['O', 'CENTCOM General'],
            ['C', 'SOUTHCOM General'],
            ['P', 'Paya Lebar, Singapore'],
            ['D', 'Diego Garcia'],
            ['Q', 'PACAF/AMD Assigned'],
            ['E', 'NETTF'],
            ['R', 'Not Assigned'],
            ['F', 'Istres/Le Tube AB, FR'],
            ['S', 'Kadena AB, JA'],
            ['G', 'Andersen AFB, Guam'],
            ['T', 'U Taphao, Thailand'],
            ['H', 'Joint Base Pearl Harbor Hickam AFB HI'],
            ['U', 'HQ AFRC Assigned'],
            ['I', 'Incirlik AB, TU'],
            ['V', 'XOOK Assigned'],
            ['J', 'USAFE/AMD Assigned'],
            ['W', 'PACOM General'],
            ['K', 'Keflavik NAS, Iceland'],
            ['X', 'AEF Not Listed'],
            ['L', 'Lajes AB, PO'],
            ['Y', 'OEF Not Listed'],
            ['M', 'Moron AB, SP'],
            ['Z', 'XOOK Assigned']
        ];

        const reDepchar7 = [
            ['G', 'Deployment'],
            ['H', 'Redeployment']
        ];

        const operator = [
            ['15', '97 AMW Altus AFB (AETC),KC-135R'],
            ['70', '18 WG Kadena AB (PACAF),KC-135R/T'],
            ['38', 'Not Assigned'],
            ['78', '121 ARW Rickenbacker OH (ANG),KC-135R'],
            ['40', '22 ARW McConnell AFB KS (AMC)/931 ARG McConnell AFB KS (AFRC)*,KC-135R/T'],
            ['79', '126 ARW Scott AFB IL (ANG)*/375 AW/906 ARS Scott (AMC Assoc)*,KC-135R'],
            ['41', '6 AMW MacDill AFB FL (AMC)/927 ARW MacDill AFB FL (AFRC),KC-135R/T'],
            ['80', '128 ARW General Mitchell WI (ANG),KC-135R'],
            ['42', '92 ARW Fairchild AFB WA (AMC),KC-135R/T'],
            ['81', '134 ARW McGhee Tyson TN (ANG),KC-135R'],
            ['43', '509 WIC, Fairchild AFB, WA (AMC)*,KC-135R/T'],
            ['82', '141 ARW Fairchild AFB WA,(ANG Assoc),KC-135R'],
            ['45', '305 AMW McGuire AFB NJ (AMC)/514 AMW McGuire AFB NJ (AFRC),KC-10A'],
            ['83', '151 ARW Salt Lake City UT (ANG),KC-135R'],
            ['47', '319 ARW Grand Forks AFB ND (AMC),KC-135R/T'],
            ['84', '157 ARW Pease NH (ANG),KC-135R'],
            ['51', '117 ARW Birmingham AL (ANG),KC-135R'],
            ['85', '155 ARW Lincoln NE (ANG),KC-135R'],
            ['52', '60 AMW Travis AFB CA (AMC)/349 AMW Travis AFB CA (AFRC),KC-10A'],
            ['87', '171 ARW Pittsburgh PA (ANG),KC-135T'],
            ['53', '106RW to include 101st, 102nd and 103rd RQS,HH-60/HC-130'],
            ['88', 'Not Assigned'],
            ['54', '15WG/ 96ARS Joint Base Pearl Harbor Hickam AFB HI,KC-135R'],
            ['89', '190 ARW Forbes ANGB KS (ANG),KC-135R'],
            ['55', '101 ARW Bangor ME (ANG),KC-135R'],
            ['91', '185 ARW Sioux City IA (ANG),KC-135R'],
            ['56', '108 ARW McGuire AFB NJ (ANG),KC-135R'],
            ['93', '916 ARW Seymour Johnson AFB NC (AFRC),KC-135R'],
            ['59', '452 AMW March ARB CA (AFRC),KC-135R'],
            ['95', '100 ARW RAF Mildenhall,KC-135R/T'],
            ['61', '434 ARW Grissom AFB IN (AFRC),KC-135R'],
            ['96', '618 AOC/XOBK,KC-135R'],
            ['63', '161 ARW Phoenix (Sky Harbor IAP) AZ (ANG),KC-135R'],
            ['97', '618 AOC/XOOK,KC-135R'],
            ['64', '507 ARW Tinker AFB OK (AFRC),KC-135R'],
            ['GT', '137 AW Will Rogers OK(ANG Assoc),KC-135E'],
            ['66', '459 ARW Andrews AFB MD (AFRC),KC-135R'],
            ['GI', '127 WG Selfridge MI (ANG),KC-135T'],
            ['67', '168 ARW Eielson AFB AK (ANG),KC-135R'],
            ['68', '154WG/203ARS Joint Base Pearl Harbor Hickam AFB HI (PACAF),KC-135R'],
        ];

        for (let i of this.first) {
            if (i[0] === msnnum[0]) {
                msndetail[0] = [i[0], i[1]];
                break;
            } else if (msnnum[0]) {
                msndetail[0] = [msnnum[0], 'No Decode'];
            }
        };

        for (let i of char2) {
            if (i[0] === msnnum[1]) {
                msndetail[1] = [i[0], i[1]];
                break;
            } else if (msnnum[1]) {
                msndetail[1] = [msnnum[1], 'No Decode'];
            }
        };

        for (let i of char3) {
            if (i[0] === msnnum[2]) {
                msndetail[2] = [i[0], i[1]];
                break;
            } else if (msnnum[2]) {
                msndetail[2] = [msnnum[2], 'No Decode'];
            }
        };

        if (msnnum.substring(3, 7)) {
            msndetail[3] = [msnnum.substring(3, 7), 'AMC Rcvr Mission ID'];
        };

        for (let i of nonAmcRcvrActivity) {
            if (i[0] === msnnum[6]) {
                msndetail[4] = [i[0], i[1]];
                for (let i2 of nonAmcRcvr) {
                    if (i2[0] === msnnum.substring(3, 6)) {
                        msndetail[3] = [i2[0], i2[1]];
                        break;
                    } else {
                        msndetail[3] = [msnnum.substring(3, 6), 'Non-Amc Rcvr/Coronet ID'];
                    }
                }
                break;
            } else {
                msndetail[3] = [msnnum.substring(3, 7), 'AMC Rcvr Mission ID'];
            }
        };

        // Checks to see if mission is a deployer/redeployer, then applies logic.
        if (msnnum[1] === 'M') {
            for (let i of operator) {
                if (i[0] === msnnum.substring(3, 5)) {
                    msndetail[3] = [i[0], i[1]];
                    break;
                } else if (msnnum.substring(3, 5)) {
                    msndetail[3] = [msnnum.substring(3, 5), 'No Decode'];
                    msndetail[4] = null;
                }
            };
            for (let i of reDepTtf) {
                if (i[0] === msnnum[5]) {
                    msndetail[4] = [i[0], i[1]];
                    break;
                } else if (msnnum[5]) {
                    msndetail[4] = [msnnum[5], 'No Decode'];
                }
            };
            for (let i of reDepchar7) {
                if (i[0] === msnnum[6]) {
                    msndetail[5] = [i[0], i[1]];
                    break;
                } else if (msnnum[6]) {
                    msndetail[5] = [msnnum[6], 'No Decode'];
                }
            };
        };

        if (msnnum[6] === 'A' || msnnum[6] === 'D' || msnnum[6] === 'E' || msnnum[6] === 'S' || msnnum[6] === 'W') {
            if (msnnum[7]) {
                msndetail[6] = [msnnum[7], 'Cell Number'];
            }
            if (msnnum[8]) {
                msndetail[7] = [msnnum[8], 'Cell Position'];
            }
        } else if (msnnum.substring(3, 6) === 'WTA' || msnnum.substring(3, 6) === 'WTC' || msnnum.substring(3, 6) === 'WTP') {
            if (msnnum.substring(8, 10)) {
                msndetail[6] = [msnnum.substring(8, 10), 'ATO Numerical C/S'];
            }
        }


        return msndetail;

    };
}
