export default function validate2(user) {
    let errorMsg = {};

    // claim Number Validation
    if (!user.claimno.trim()) {
        errorMsg.claimNumber = "Claim Number is required"
    } else if (user.claimno.length > 9) {
        errorMsg.claimNumber = "Claim Number should be maximum length of 9"
    }
    else if (!/^[0-9a-zA-Z]+$/.test(user.claimno)) {
        errorMsg.claimNumber = "Claim Number should be AlphaNumeric"
    }

    // claim Program Validation
    if (!user.claimprogram) {
        errorMsg.claimProgram = "Claim Program is required"
    } else if (user.claimprogram.length > 20) {
        errorMsg.claimProgram = "Claim Program should be maximum length of 20"
    }

    // Date Validation
    if (!user.startdate) {
        errorMsg.claimStartdate = "Claim Start Date is required"
    }

    if (!user.enddate) {
        errorMsg.claimEnddate = "Claim End Date is required"
    } else if (user.startdate > user.enddate) {
        errorMsg.claimEnddate = "End Date must be greater than Start Date";
    }

    return errorMsg;
}

