// 1.deploy PlaneRegistry and PlaneInteractor contract
// 2.call the addPlane function using PlaneInteractor contract

const hre = require("hardhat")

async function main() {
    // deploy PlaneRegistry Contract
    let planeInteractorAddress
    const planeRegistry = await hre.ethers.getContractFactory("PlaneRegistry")
    const planeRegistryInstance = await planeRegistry.deploy()
    await planeRegistryInstance.deployed()
    planeRegistryInstanceAddress = planeRegistryInstance.address
    console.log("PlaneRegistry Address:", planeRegistryInstanceAddress)

    // deploy PlaneInteractor Contract
    let planeInteractorInstanceAddress
    const planeInteractor = await hre.ethers.getContractFactory(
        "PlaneInteractor"
    )
    const planeInteractorInstance = await planeInteractor.deploy()
    await planeInteractorInstance.deployed()
    planeInteractorInstanceAddress = planeInteractorInstance.address
    console.log("PlaneInteractor Address:", planeInteractorInstanceAddress)

    // Call addPlanes Function using PlaneInteractor Contract
    const address = planeRegistryInstanceAddress
    console.log("----------- ADDING PLANE NAMES -----------")

    await planeInteractorInstance.calladdPlanes(address, "Air India")
    await planeInteractorInstance.calladdPlanes(address, "Etihad")
    await planeInteractorInstance.calladdPlanes(address, "Vistara")
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
