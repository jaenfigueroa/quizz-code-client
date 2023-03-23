import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import confirmUserEmail from "../../helpers/confirmUserEmail";

const ConfirmRegistration = () => {
    const { confirmationToken } = useParams();
    useEffect(() => {
        confirmUserEmail(confirmationToken);
    }, [])
    
    return (
        <section>
            <p>Cuenta confirmado</p>
        </section>
    )
}

export default ConfirmRegistration;