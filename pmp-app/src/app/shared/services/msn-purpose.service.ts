export class MsnPurposeService {

 PURPOSE = [
        { code: 'AE', purpose: ['AEROMEDICAL_EVACUATION']},
        { code: 'AFRC', purpose: ['AFRC']},
        { code: 'AIREV', purpose: ['AEROMEDICAL_EVACUATION', 'ANG']},
        { code: 'AR', purpose: ['EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION']},
        { code: 'AREXER', purpose: ['CONTINGENCY_OPLAN_EXCERCISE']},
        { code: 'CHANL', purpose: ['CHANNEL']},
        { code: 'CNTNG', purpose: ['TANKER_AIR_REFUELING', 'CONTINGENCY_OPLAN_EXCERCISE']},
        { code: 'CORNET', purpose: ['EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION']},
        { code: 'EXER', purpose: ['TANKER_AIR_REFUELING', 'CONTINGENCY_OPLAN_EXCERCISE']},
        { code: 'GRDLFT', purpose: ['ANG']},
        { code: 'JAATT', purpose: ['JOINT_AIRBORNE_AIR_TRANSPORT_TRANING']},
        { code: 'JCSEXER', purpose: ['CONTINGENCY_OPLAN_EXERCISE']},
        { code: 'MISC', purpose: ['MISC']},
        { code: 'OPLAN', purpose: ['CONTINGENCY_OPLAN_EXERCISE']},
        { code: 'OPORD', purpose: ['CONTINGENCY_OPLAN_EXERCISE']},
        { code: 'SAAM', purpose: ['SPECIAL_ASSIGNMENT_AIRLIFT_MISSION']},
        { code: 'SAM', purpose: ['EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION']},
        { code: 'SUPT', purpose: ['OPERATIONAL_SUPPORT_AIRLIFT', 'EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION', 'ANG', 'AFSOC']},
        { code: 'TRNG', purpose: ['LOCAL_TRAINING', 'EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION', 'ANG']},
 ];

codeOnly() {
const codeOnlyArray = [];
this.PURPOSE.forEach(element => {
    codeOnlyArray.push(element.code);
});
return codeOnlyArray;
}

purposes(code:string) {
  let codePurposes: object;
  codePurposes = this.PURPOSE.find(x => x.code === code);
  return codePurposes;
 }



DECODE_MAP = {
        CHANNEL: 'chanelDecode',
        SPECIAL_ASSIGNMENT_AIRLIFT_MISSION: 'saamDecode',
        JOINT_AIRBORNE_AIR_TRANSPORT_TRANING: 'jaattDecode',
        AEROMEDICAL_EVACUATION: ['airevOCONUSDecode', 'airevCONUSDecode'],
        CONTINGENCY_OPLAN_EXERCISE: 'coeDecode',
        OPERATIONAL_SUPPORT_AIRLIFT: 'osaDecode',
        EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION: 'samDecode',
        TANKER_AIR_REFUELING: 'aarDecode',
        LOCAL_TRAINING: 'nodecodenow',
}

}


// DECODE_MAP = {
//         CHANNEL: ['CHANL'],
//         SPECIAL_ASSIGNMENT_AIRLIFT_MISSION: ['SAAM'],
//         JOINT_AIRBORNE_AIR_TRANSPORT_TRANING: ['JAATT'],
//         AEROMEDICAL_EVACUATION: ['AIREV', 'AE'],
//         CONTINGENCY_OPLAN_EXERCISE: ['CNTNG', 'OPLAN', 'OPORD', 'JCSEXER', 'EXER', 'AREXER'],
//         OPERATIONAL_SUPPORT_AIRLIFT: ['SUPT'],
//         EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION: ['SAM', 'SUPT', 'TRNG', 'CORNET', 'AR'],
//         TANKER_AIR_REFUELING: ['CNTNG', 'EXER'],
//         ANG: ['GRDLFT', 'SUPT', 'AIREV', 'TRNG'],
//         AFSOC: ['SUPT'],
//         LOCAL_TRAINING: ['TRNG'],
//         AFRC: ['AFRC'],
//         MISC: ['MISC']
// }
    // type = {
    //     CHANNEL: ['CHANL'],
    //     SPECIAL_ASSIGNMENT_AIRLIFT_MISSION: ['SAAM'],
    //     JOINT_AIRBORNE_AIR_TRANSPORT_TRANING: ['JAATT'],
    //     AEROMEDICAL_EVACUATION: ['AIREV', 'AE'],
    //     CONTINGENCY_OPLAN_EXERCISE: ['CNTNG', 'OPLAN', 'OPORD', 'JCSEXER', 'EXER', 'AREXER'],
    //     OPERATIONAL_SUPPORT_AIRLIFT: ['SUPT'],
    //     EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION: ['SAM', 'SUPT', 'TRNG', 'CORNET', 'AR'],
    //     TANKER_AIR_REFUELING: ['CNTNG', 'EXER'],
    //     ANG: ['GRDLFT', 'SUPT', 'AIREV', 'TRNG'],
    //     AFSOC: ['SUPT'],
    //     LOCAL_TRAINING: ['TRNG'],
    //     AFRC: ['AFRC'],
    //     MISC: ['MISC']
    // };


    //     PURPOSE = [
    //     ['AE', 'AEROMEDICAL_EVACUATION'],
    //     ['AFRC', 'AFRC'],
    //     ['AIREV', 'AEROMEDICAL_EVACUATION', 'ANG'],
    //     ['AR', 'EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION'],
    //     ['AREXER', 'CONTINGENCY_OPLAN_EXCERCISE'],
    //     ['CHANL', 'CHANNEL'],
    //     ['CNTNG', 'TANKER_AIR_REFUELING', 'CONTINGENCY_OPLAN_EXCERCISE'],
    //     ['CORNET', 'EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION'],
    //     ['EXER', 'TANKER_AIR_REFUELING', 'CONTINGENCY_OPLAN_EXCERCISE'],
    //     ['GRDLFT', 'ANG'],
    //     ['JAATT', 'JOINT_AIRBORNE_AIR_TRANSPORT_TRANING'],
    //     ['JCSEXER', 'CONTINGENCY_OPLAN_EXERCISE'],
    //     ['MISC', 'MISC'],
    //     ['OPLAN', 'CONTINGENCY_OPLAN_EXERCISE'],
    //     ['OPORD', 'CONTINGENCY_OPLAN_EXERCISE'],
    //     ['SAAM', 'SPECIAL_ASSIGNMENT_AIRLIFT_MISSION'],
    //     ['SAM', 'EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION'],
    //     ['SUPT', 'OPERATIONAL_SUPPORT_AIRLIFT', 'EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION', 'ANG', 'AFSOC'],
    //     ['TRNG', 'LOCAL_TRAINING', 'EXECUTIVE_AIRCRAFT_SPECIAL_AIR_MISSION', 'ANG']
    // ];


