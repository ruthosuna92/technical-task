<script>
    import { allTherapistsBackUp, allTherapists } from "../../../stores";
    let therapistsSorted = $allTherapists;
    let backUp = $allTherapistsBackUp;
    const handleSort = (event) => {
       console.log(backUp);
        switch (event.target.value) {
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

<div class="flex flex-wrap items-center gap-4 justify-between xs:hidden">
    <span
        class="text-xl xs:hidden font-semibold text-primary-dark sm:mr-40 md:mr-12"
    >
        Let's discover your next therapist
    </span>
    <span
        class="text-xl sm:hidden md:hidden items-center font-semibold text-primary-dark text-left sticky"
    >
        Discover your next therapist
    </span>
    <div class="flex items-center justify-center gap-6 xs:gap-4">
        <div
            class="bg-white rounded-full flex h-10 py-2 px-6 gap-4 border border-stroke-medium shadow-[0_4px_4px_0px_rgba(0,0,0,0.03)]"
        >
            Sort by:
            <select
                name="order"
                id="order"
                class="border-0 bg-transparent focus:outline-none focus:ring-0 focus:border-0 hover:cursor-pointer"
                on:change={handleSort}
            >
                <option value=""> </option>
                <option value="AZ"> Name: A to Z </option>
                <option value="ZA"> Name: Z to A </option>
                <option value="LH"> Rate: Low to High </option>
                <option value="HL"> Rate: High to Low </option>
                <option value="LHY"> Year of experience: Low to High </option>
                <option value="HLY"> Year of experience: High to Low </option>
                <option value="ND"> Next available date</option>
            </select>
        </div>
    </div>
</div>
