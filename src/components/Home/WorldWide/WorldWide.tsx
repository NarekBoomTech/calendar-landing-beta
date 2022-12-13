import styles from '@/components/Home/WorldWide/style.module.css';
import Blog from '@/components/Home/WorldWide/Blog/Blog';
import ManageModal from '@/components/Home/WorldWide/ManageModal/ManageModal';
import Testimonials from '@/components/Home/WorldWide/Testimonials/Testimonials';

const WorldWide = () => {
	return (
		<section className={styles.section}>
			<Testimonials />
			<Blog />
			<ManageModal />
		</section>
	);
};

export default WorldWide;
