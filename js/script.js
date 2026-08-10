/* =====================================================
   MIDFLOW MOBILE NAVIGATION
===================================================== */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileNav =
    document.getElementById("mobileNav");


if (mobileMenuBtn && mobileNav) {

    mobileMenuBtn.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileNav.classList.toggle("open");

            mobileMenuBtn.classList.toggle(
                "active",
                isOpen
            );

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    /* Close menu after clicking a link */

    mobileNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileNav.classList.remove(
                        "open"
                    );

                    mobileMenuBtn.classList.remove(
                        "active"
                    );

                    mobileMenuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}
