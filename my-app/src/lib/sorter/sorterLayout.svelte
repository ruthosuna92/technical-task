<script>
    import { menuSorter, allTherapistsBackUp, allTherapists } from "../../stores"

let therapistsSorted = $allTherapists;
    let backUp = $allTherapistsBackUp;
    const handleMenuSort = () => {
        menuSorter.update((bool) => bool = false)
    }
    

    const handleSort = (event) => {
       console.log(backUp);
        switch (event.target.name) {
            case "":
                return allTherapists.set(backUp);
            case "AZ":
                return allTherapists.set(
                    therapistsSorted.sort((a, b) =>
                        a.firstName.localeCompare(b.firstName),
                    ),
                );
            case "ZA":
                return allTherapists.set(
                    therapistsSorted.sort((a, b) =>
                        b.firstName.localeCompare(a.firstName),
                    ),
                );
            case "LH":
                return allTherapists.set(
                    therapistsSorted.sort((a, b) => a.price - b.price),
                );
            case "HL":
                return allTherapists.set(
                    therapistsSorted.sort((a, b) => b.price - a.price),
                );
            case "LHY":
                return allTherapists.set(
                    therapistsSorted.sort(
                        (a, b) =>
                            a.profile.yearsOfExperience -
                            b.profile.yearsOfExperience,
                    ),
                );
            case "HLY":
                return allTherapists.set(
                    therapistsSorted.sort(
                        (a, b) =>
                            b.profile.yearsOfExperience -
                            a.profile.yearsOfExperience,
                    ),
                );
            default:
                return allTherapists.set(backUp);
        }
    };
</script>

<div
    class=" { $menuSorter ? "" : "xs:hidden"} xs:fixed xs:h-screen xs:w-screen bg-white justify-center xs:top-0 xs:left-0 flex flex-wrap gap-6 xs:gap-0 overflow-hidden w-full"
>
<div
    class="sm:hidden md:hidden w-full bg-accent-green flex py-[0.875rem] px-4 justify-between"
>
    <button class="flex justify-center items-center gap-[0.62rem]" on:click={handleMenuSort}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                d="M15.8346 9.99988L4.16797 9.99988"
                stroke="#203136"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10.0013 15.8332L4.16797 9.9999L10.0013 4.16656"
                stroke="#203136"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
        <p class="text-base">Sort by</p>
    </button>
    <button class="text-smb"></button>
</div>

    <div
        class="bg-white flex p-6 flex-col gap-8 rounded-2xl border xs:border-0 xs:rounded-none sm:border-stroke-cards md:border-stroke-cards w-auto xs:h-full overflow-auto"
    >
    <button on:click={handleSort} name="AZ"> Name: A to Z </button>
    <button on:click={handleSort} name="ZA"> Name: Z to A </button>
    <button on:click={handleSort} name="LH"> Rate: Low to High </button>
    <button on:click={handleSort} name="HL"> Rate: High to Low </button>
    <button on:click={handleSort} name="LHY"> Year of experience: Low to High </button>
    <button on:click={handleSort} name="HLY"> Year of experience: High to Low </button>
    <button on:click={handleSort} name="ND"> Next available date</button>
    </div>
</div>