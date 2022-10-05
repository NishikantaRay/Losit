import eyemou from "./eymou.png"

const Navbar = () => {
    return (
        <nav style={{backgroundColor:"#010100"}} class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span style={{backgroundColor:"#FFFFFF56", borderRadius:"5px"}} class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-light" style={{transform:"scale(1.7)",marginLeft:"10px"}} aria-current="page" href="#"><img src={eyemou} alt="logo" /></a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <a class="nav-link active text-light m-2" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light m-2" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light m-2" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light m-2" href="#">Career</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light m-2" href="#">Contact</a>
                        </li>
                        <button type="button" style={{backgroundColor:"#a475d3", boxShadow:"none",border:"black", borderRadius:"0px"}} class="btn btn-primary m-2 text-dark">Sign In</button>
                    </ul>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;