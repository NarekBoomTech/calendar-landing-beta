import styles from '@/components/Home/WorldWide/style.module.css';
import Blog from '@/components/Home/WorldWide/Blog/Blog';
import ManageModal from '@/components/Home/WorldWide/ManageModal/ManageModal';
import Testimonials from '@/components/Home/WorldWide/Testimonials/Testimonials';
import Shape from '../Shape/Shape';

const WorldWide = () => {
	return (
		<section className={styles.section}>
			<Shape />
			<Testimonials />
			<Blog />
			<ManageModal />
		</section>
	);
};

export default WorldWide;
