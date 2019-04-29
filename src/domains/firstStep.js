import { firestore } from "../firebase"

export const firstStep = user => {
    //stepをurlにも
    let step = 1;
    const addPartnerInfo = partnerObject => firestore.collection("partner").add(user.uid).set({partnerObject})
    switch (step){
        case 1:
            step ++
        case 2:

            step ++
        case 3:
            break;
        default:
            break;
    }
}