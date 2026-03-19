function orderNow(name, price, image) {
    let phone = "919918645600";

    let baseUrl = "https://mahendrayadav17092006-ops.github.io/DHEERU_TIMBER/";

    let message = "RADHE RADHE, I want to order:\n"
                + "Product: " + name + "\n"
                + "Price: ₹" + price + "\n"
                + "Image: " + baseUrl + image;

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
