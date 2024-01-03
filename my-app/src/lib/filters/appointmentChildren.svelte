<script>
    import { appointmentType } from "../../stores";
    let checkedd = $appointmentType.checked;
    let checkedd1 = $appointmentType.checked1;

    //handle if the chexkbox is checked or not
    const handle = (event) => {
        if (event.target.id === "customCheckbox15") {
            appointmentType.update((app) => {
                checkedd = !app.checked; // Update checkedd with the new value
                return { ...app, checked: !app.checked };
            });
        } else {
            appointmentType.update((app) => {
                checkedd1 = !app.checked1; // Update checkedd with the new value
                return { ...app, checked1: !app.checked1 };
            });
        }
    };
</script>

<!-- Structure of chexkboxes customized -->
<div class="flex h-10 py-0 px-2 items-center gap-4">
    <input
        type="checkbox"
        id="customCheckbox15"
        class="hidden"
        on:click={handle}
    />
    <label for="customCheckbox15" class="cursor-pointer flex items-start">
        <div
            class="w-[1.25rem] h-[1.25rem] border border-gray-300-c rounded-md transition duration-300 ease-in-out {checkedd
                ? 'bg-accent-green border-blue-500'
                : 'bg-white'}"
        >
            <svg
                class="w-4 h-4 m-auto text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                ></path>
            </svg>
        </div>
        <span class="ml-2">15-min free consultation<br />(comming soon)</span>
    </label>
</div>
<div class="flex h-10 py-0 px-2 items-center gap-4">
    <input
        type="checkbox"
        id="customCheckbox50"
        class="hidden"
        on:click={handle}
    />
    <label for="customCheckbox50" class="cursor-pointer flex items-center">
        <div
            class="w-[1.25rem] h-[1.25rem] border border-gray-300-c rounded-md transition duration-300 ease-in-out {checkedd1
                ? 'bg-accent-green border-blue-500'
                : 'bg-white'}"
        >
            <svg
                class="w-4 h-4 m-auto text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                ></path>
            </svg>
        </div>
        <span class="ml-2">Individual 50-min session</span>
    </label>
</div>
