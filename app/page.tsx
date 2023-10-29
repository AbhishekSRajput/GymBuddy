import Banner from "./components/Banner/index";
import Workout from "./components/Workout";

export default function Home() {
	return (
		<main>
			<div className='mt-14'>
				<Banner />
			</div>
			<Workout />
		</main>
	);
}
