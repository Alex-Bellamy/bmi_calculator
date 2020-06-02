const  calculateMetricBMI = (weight, height) => {
	let  result
    result = (weight / ((height / 100) * (height / 100))).toFixed(2)
    return result
}

const getBMIClassification = (result) => {
        if (result < 18.5){
            return "Underweight"
        } else if (result < 25){
            return "Healthy"
        } else if (result < 30){
            return "Overweight"
        } else if (result > 30){
            return "Obease"
        }
}