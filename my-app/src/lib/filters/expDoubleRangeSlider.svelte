<script>
	// This component was found in svelte.com that is why i didn't use tailwind in this case
	import { minExp, maxExp, allTherapists} from "../../stores";
	export let start = 0;
	export let end = 1;
	let leftHandle;
	let body;
	let slider;
	let therapists = $allTherapists
	function draggable(node) {
		let x;
		let y;
		function handleMousedown(event) {
			if (event.type === 'touchstart') {
				event = event.touches[0];
			}
			x = event.clientX;
			y = event.clientY;
            
			node.dispatchEvent(new CustomEvent('dragstart', {
				detail: { x, y }
			}));
			window.addEventListener('mousemove', handleMousemove);
			window.addEventListener('mouseup', handleMouseup);
			window.addEventListener('touchmove', handleMousemove);
			window.addEventListener('touchend', handleMouseup);
		}
		function handleMousemove(event) {
			if (event.type === 'touchmove') {
				event = event.changedTouches[0];
			}
            
			const dx = event.clientX - x;
			const dy = event.clientY - y;
			x = event.clientX;
			y = event.clientY;
			node.dispatchEvent(new CustomEvent('dragmove', {
				detail: { x, y, dx, dy }
			}));
		}
		function handleMouseup(event) {
            
			x = event.clientX;
			y = event.clientY;
			node.dispatchEvent(new CustomEvent('dragend', {
				detail: { x, y }
			}));
			window.removeEventListener('mousemove', handleMousemove);
			window.removeEventListener('mouseup', handleMouseup);
			window.removeEventListener('touchmove', handleMousemove);
			window.removeEventListener('touchend', handleMouseup);
		}
		node.addEventListener('mousedown', handleMousedown);
		node.addEventListener('touchstart', handleMousedown);
        console.log(x, y)
		return {
			destroy() {
				node.removeEventListener('mousedown', handleMousedown);
				node.removeEventListener('touchstart', handleMousedown);
			}
		};
	}
	function setHandlePosition (which) {
        
		return function (evt) {
			const { left, right } = slider.getBoundingClientRect();
			const parentWidth = right - left;
			const p = Math.min(Math.max((evt.detail.x - left) / parentWidth, 0), 1);
            
			if (which === 'start') {
				start = p;
				end = Math.max(end, p)
                minExp.update((n) => n = Math.floor(start * 25))
				allTherapists.set(therapists.filter((therapist) => therapist.profile.yearsOfExperience >= $minExp && therapist.profile.yearsOfExperience <= $maxExp))
			} else {
				start = Math.min(p, start);
				end = p;
                maxExp.update((n) => n = Math.floor(end * 25))
				allTherapists.set(therapists.filter((therapist) => therapist.profile.yearsOfExperience >= $minExp && therapist.profile.yearsOfExperience <= $maxExp))
			}
		}
	}
	function setHandlesFromBody (evt) {
        
		const { width } = body.getBoundingClientRect();
		const { left, right } = slider.getBoundingClientRect();
        

		const parentWidth = right - left;
		const leftHandleLeft = leftHandle.getBoundingClientRect().left;
		const pxStart = clamp((leftHandleLeft + event.detail.dx) - left, 0, parentWidth - width);
		const pxEnd = clamp(pxStart + width, width, parentWidth);
		const pStart = pxStart / parentWidth;
		const pEnd = pxEnd / parentWidth;
		start = pStart;
		end = pEnd;
        
	}

    
</script>

<div class="double-range-container">
	<div class="slider" bind:this={slider}>
		<div
			class="body"
			bind:this={body}
			use:draggable
			on:dragmove|preventDefault|stopPropagation="{setHandlesFromBody}"
			style="
				left: {100 * start}%;
				right: {100 * (1 - end)}%;
			"
			></div>
		<div
			class="handle"
            id={Math.floor(start * 200)}
			bind:this={leftHandle}
			data-which="start"
			use:draggable
			on:dragmove|preventDefault|stopPropagation="{setHandlePosition('start')}"
			style="
				left: {100 * start}%
			"
		><div class="translate-y-[-150%] translate-x-[-50%] absolute h-[1.61rem] py-0.5 px-4 items-center gap-[0.625] rounded-2xl text-white bg-primary-dark text-smb" >{Math.floor(start*25)}</div></div>
		<div
			class="handle"
            id={Math.floor(end * 25)}
			data-which="end"
			use:draggable
			on:dragmove|preventDefault|stopPropagation="{setHandlePosition('end')}"
			style="
				left: {100 * end}%
			"
		><div class="translate-y-[-150%] translate-x-[-50%] absolute h-[1.61rem] py-0.5 px-4 items-center gap-[0.625] rounded-2xl text-white bg-primary-dark text-smb" >{Math.floor(end*25) === 25 ? "+25" : Math.floor(end*25)}</div></div>
	</div>

	<div class="flex flex-row justify-between mt-4 text-smb">
		<h1>0</h1>
		<h1>+25</h1>
	</div>
</div>

<style>
	.double-range-container {
		width: 100%;
		height: 20px;
		user-select: none;
		box-sizing: border-box;
		white-space: nowrap
	}
	.slider {
		position: relative;
		width: 100%;
		height: 6px;
		top: 50%;
		transform: translate(0, -50%);
		background-color: #F1F1F1;
		box-shadow: inset 0 7px 10px -5px #F1F1F1, inset 0 -1px 0px 0px #F1F1F1;
		border-radius: 1px;
	}
	.handle {
		position: absolute;
		top: 50%;
		width: 0;
		height: 0;
	}
	.handle:after {
		content: ' ';
		box-sizing: border-box;
		position: absolute;
		border-radius: 50%;
		width: 16px;
		height: 16px;
		background-color: #fdfdfd;
		border: 1px solid #7b7b7b;
		transform: translate(-50%, -50%)
	}
	/* .handle[data-which="end"]:after{
		transform: translate(-100%, -50%);
	} */
	.handle:active:after {
		background-color: #ddd;
		z-index: 9;
	}
	.body {
		top: 0;
		position: absolute;
		background-color: #BFD962;
		bottom: 0;
	}
</style>