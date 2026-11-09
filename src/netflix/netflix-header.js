
export function NetflixHeader(){
    return(
                <header className="p-3 d-flex justify-content-between">
                    <div className="brand-title">Netflix</div>

                    <div className="d-flex align-items-center"> 
                        <div className="dropdown me-3"> 
                            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" > 
                                <i className="bi bi-globe"></i> 
                                Language 
                            </button> 
                            <ul className="dropdown-menu"> 
                                <li> 
                                    <button className="dropdown-item">
                                        English
                                    </button> 
                                </li> 
                                <li> 
                                    
                                    <button className="dropdown-item">
                                        Hindi
                                    </button> 
                                </li> 
                            </ul> 
                        </div> 
                                    
                        <button type="button" className="btn btn-danger"> Sign In </button>

                    </div>

                </header>
            )
}