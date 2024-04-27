import React from 'react';
import {Layout} from 'antd';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Banner from "@/components/layout/banner";




export default function Main({ children }: any) {
  return (
    <Layout>
      <Banner/>
      <Header/>
          <div className="sm:px-6 lg:px-8">{children}</div>
      <Footer/>
    </Layout>
  );
};
