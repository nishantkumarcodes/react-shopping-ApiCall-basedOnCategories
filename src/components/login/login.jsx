import "./login.css"

export function Login(){
    var title=prompt("Enter Title");
    return(
        <div className="container-fluid">
            <form>
                <h2>{title}</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control"/></dd>
                </dl>
                <button className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    )
}