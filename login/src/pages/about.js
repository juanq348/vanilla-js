export function aboutUs(){
    const $container = document.createElement('div');

    $container.classList.add("w-1/2", "mx-auto", "p-4", "bg-white", "rounded-md");

    $container.innerHTML = `
    <h1 class = "text-2x1">About Us</h1>
    <p class = "mt-4">LJFKLDSJFKDJKFDSLJLFDSJKLDSFJLFDSKLs</p>
    `;

    return $container
}