<script>
    export let quantity
    export let name
    export let color

    console.log(color);
</script>

<div class="flex flex-col justify-center gap-2 py-4 px-6 items-center">
    <div class="border-[5px] xs:border-[3.04px] {color === "accent-green" ? "border-accent-green": ""} {color === "accent-blue-brand" ? "border-accent-blue-brand": ""} {color === "accent-orange-brand" ? "border-accent-orange-brand": ""} {color === "accent-dark-blue" ? "border-accent-dark-blue": " "} bg-white rounded-full w-[5.375rem] h-[5.375rem] xs:w-[3.26769rem] xs:h-[3.26769rem] relative">
        <div class="flex absolute bottom-0 border-[3px] border-white text-sm translate-y-[0.5rem] translate-x-[0.5rem] right-0 p-1 {color === "accent-dark-blue" ? "bg-accent-dark-blue text-white": ""} {color === "accent-green" ? "bg-accent-green text-white": ""} {color === "accent-blue-brand" ? "bg-accent-blue-brand text-black ": ""} {color === "accent-orange-brand" ? "bg-accent-orange-brand text-black ": ""} rounded-full items-center xs:text-[0.45594rem]">
            {quantity}
        </div>
    </div>
    <p class="xs:text-sm sm:text-[0.78rem]">{name}</p>
</div>
  