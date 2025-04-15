import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/data.css'

function Data() {

    const navigate = useNavigate()
    const [showSignOut, setShowSignOut] = useState(false)
    const signOut = () => setShowSignOut(true)
    const cancelSignOut = () => setShowSignOut(false)
    const [isSigningOut, setIsSigningOut] = useState(false)
    const [showPrimaryID, setShowPrimaryID] = useState(false)
    const showID = () => setShowPrimaryID(true)
    const hideID = () => setShowPrimaryID(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false) 
    const showUpdate = () => setShowUpdateForm(true)
    const hideUpdate = () => setShowUpdateForm(false)
    const [isUpdateFormDefault, setIsUpdateFormDefault] = useState(false)
    const [updateFormError, setUpdateFormError] = useState(false)
    const [updateFormSuccess, setUpdateFormSuccess] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)
    const [isLoadingData, setIsLoadingData] = useState(false)

    const [formData, setFormData] = useState({ primaryid: '', firstname: '', middlename: '', lastname: '', mobile: ''})
    const [errors, setErrors] = useState({ primaryid: '', firstname: '', middlename: '', lastname: '', mobile: '', updateForm: '' })

    return (
        <div className="data-form">
            <h2>Certificate Information</h2>
            
            <form noValidate encType='multipart/form-data'>

                <div className="inputBox">
                <i className='bx bxs-user-rectangle'></i>
                <input type="text" placeholder="Enter your Firstname" value={formData.firstname ?? ''} onChange={(e) => handleUpdateInputChange('firstname', e.target.value)} autoComplete="new-firstname" />
                {errors.firstname && (<span className="error-message"><i className='bx bxs-error-circle'></i><p className='red'>{errors.firstname}</p></span>)}
                </div>

                <div className="inputBox">
                <i className='bx bxs-user-badge'></i>
                <input type="text" placeholder="Enter your Middlename" value={formData.middlename ?? ''} onChange={(e) => handleUpdateInputChange('middlename', e.target.value)} autoComplete="new-middlename" />
                {errors.middlename && (<span className="error-message"><i className='bx bxs-error-circle'></i><p className='red'>{errors.middlename}</p></span>)}
                </div>

                <div className="inputBox">
                <i className='bx bxs-user-account'></i>
                <input type="text" placeholder="Enter your Lastname" value={formData.lastname ?? ''} onChange={(e) => handleUpdateInputChange('lastname', e.target.value)} autoComplete="new-lastname" />
                {errors.lastname && (<span className="error-message"><i className='bx bxs-error-circle'></i><p className='red'>{errors.lastname}</p></span>)}
                </div>

                <div className="inputBox">
                <i class='bx bxs-calendar'></i>
                <input type="text" placeholder="Date of Completion" value={formData.completion ?? ''} onChange={(e) => handleUpdateInputChange('completion', e.target.value)} autoComplete="new-completion" />
                {errors.completion && (<span className="error-message"><i className='bx bxs-error-circle'></i><p className='red'>{errors.completion}</p></span>)}
                </div>

                <div className="inputBox">
                <i class='bx bx-line-chart'></i>
                <input type="text" placeholder="Course Length" value={formData.length ?? ''} onChange={(e) => handleUpdateInputChange('length', e.target.value)} autoComplete="new-length" />
                {errors.length && (<span className="error-message"><i className='bx bxs-error-circle'></i><p className='red'>{errors.length}</p></span>)}
                </div>

                <div className="inputBox">
                <i class='bx bx-edit-alt'></i>
                <input type="text" placeholder="Course Title" value={formData.title ?? ''} onChange={(e) => handleUpdateInputChange('title', e.target.value)} autoComplete="new-title" />
                {errors.title && (<span className="error-message"><i className='bx bxs-error-circle'></i><p className='red'>{errors.title}</p></span>)}
                </div>

                <div className="generate-button">

                <button type="submit" className="generate" disabled={isUpdating}>Generate</button>

                </div>

            </form>

        </div>
    )
}

export default Data