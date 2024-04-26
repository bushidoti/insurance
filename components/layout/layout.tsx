import React from 'react';
import {Layout} from 'antd';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";




export default function Main({ children }: any) {

  return (
    <Layout>
      <Header/>
          <div className="sm:px-6 lg:px-8 h-[100vh]">{children}</div>
      <Footer/>
    </Layout>
  );
};
