import { NextPage } from "next";
import dynamic from "next/dynamic";
const AdminApp = dynamic(() => import("@/components/adminApp"), { ssr: false });

const Home: NextPage = () => <AdminApp />;

export default Home;
