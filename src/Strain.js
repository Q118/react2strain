import React from 'react'

export default function Strain({strain, toggleStrain}) {
    function handleStrainClick() {
        toggleStrain(strain.id)
    }
    
    return (
        <div>
            <label>
                <input
                type="checkbox"
                checked={strain.smoked}
                onChange={handleStrainClick}
                />
                {strain.name}
            </label>
        </div>
    )
}
