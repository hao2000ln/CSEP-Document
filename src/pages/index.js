import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '💪 Quy trình hóa',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Quy trình hóa các hoạt động liên quan đến nghiệp vụ quản lý tài sản để giúp cho công việc được minh bạch, hiệu quả và giảm thiểu sai sót.
      </>
    ),
  },
  {
    title: '🌎 Thông tin tập trung',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Dữ liệu của <code>hàng triệu tài sản</code> được quản lý tập trung trên một ứng dụng duy nhất, giúp đưa ra cái nhìn tổng quan về hiện trạng của toàn bộ tải sản .
      </>
    ),
  },
  {
    title: '💅 Độ tin cậy cao',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Xây dựng và quản lý kế hoạch tài chính, mua sắm phù hợp, đảm bảo mua đúng/mua đủ/mua kịp thời. <br /><br />
        Nâng cao năng lực bảo dưỡng/bảo trì/sửa chữa giúp đảm bảo khả năng vận hành của tài sản liên tục.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4 text--center', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Chào mừng bạn đến với ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Bộ giải pháp CSEP</h1>
          <p className="hero__subtitle">GIẢI PHÁP QUẢN LÝ TÀI SẢN TẬP TRUNG</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="https://demoqlts.hpt.vn/sm/index.do">
              Phần mềm QLTS &#36;
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
