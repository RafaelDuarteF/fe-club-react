

export default function RedirectMenu({redirect, title, icon}) {

    return(
        <li onClick={redirect}>
            <a>
                <i className={`bx ${icon}`}></i>
                <span className="link_name">{title}</span>
            </a>
        </li>
    );
}