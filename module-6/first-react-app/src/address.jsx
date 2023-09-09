

function Address({streetName = '666 Church Street', state = 'Louisiana', country = 'USA', zipCode = '66666'}) {
    return (
        <div className="Address component" style={{fontWeight: 800, color: "red", backgroundColor: 'Dodgerblue'}}>
            {streetName} is in {state}, {country} and the zipcode is {zipCode}
        </div>
    )
}

export default Address;