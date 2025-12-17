const images = document.querySelectorAll(".galeri-item img");

let infoBox = document.querySelector("#infoProduk");

if (!infoBox) {
    infoBox = document.createElement("p");
    infoBox.id = "infoBox";
    infoBox.style.textAlign = "center";
    infoBox.style.fontWeight = "bold";
    infoBox.style.marginTop = "15px";
    document.querySelector(".galeri-container")?.appendChild(infoBox);
}

const produkList = [...images].map(img => {
    const { alt } = img;
    return alt || "Produk Tidak Dikenal";
});

images.forEach((img, index) => {
    images.addEventListener("click", () => {
        infoBox.textContent = `Produk: ${produkList[index]}`;
    });
});

images.forEach(img => {
    img.addEventListener("moueseenter", () => img.classList.add("hovered"));
    img.addEventListener("mouseleave", () => img.classList("hovered"));
});

export default produkList;