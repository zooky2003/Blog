import { useState } from 'react';
import Link from 'next/link'
import Image from "next/image";
import { slugify } from "../../utils";

const filters = [
    {
      id: 1,
      cate: "Fashion",
    },
    {
      id: 2,
      cate: "Food",
    },
   
  ];

const defaultActiveCat = slugify(filters[0].cate);

const Nav = ({posts}) => {

    const defaultData = posts.filter(
        (post) => slugify(post.cate) === defaultActiveCat
      );
    
      const [activeNav, setActiveNav] = useState(defaultActiveCat);
      const [tabPostData, setTabPostData] = useState(defaultData);
    
      const handleChange = (e) => {
        let filterText = slugify(e.target.textContent);
        setActiveNav(filterText);
        
        let tempData = [];
    
        for (let i = 0; i < posts.length; i++) {
          const element = posts[i];
          let categories = element["cate"];
    
          if (slugify(categories).includes(filterText)) {
            tempData.push(element);
          }
        }
    
        setTabPostData(tempData);
      };
    
    return (
        <ul className="mainmenu">
            <li className="menu-item-has-children"><a href="#">Home</a>
                {}
            </li>
            <li className="menu-item-has-children">
                {/* <Link href="/">
                    <a>Posts</a>
                </Link> */}
                {/* <ul className="axil-submenu"> */}
                    {}
            </li>
            <li className="menu-item-has-children megamenu-wrapper">
                {/* <Link href="#">
                    <a>Mega Menu</a>
                </Link> */}
                <ul className="megamenu-sub-menu">
                    <li className="megamenu-item">
                        {/* Start Verticle Nav  */}
                        <div className="axil-vertical-nav">
                            <ul className="vertical-nav-menu">
                                {filters.map((data) => (
                                    <li className={`vertical-nav-item ${slugify(data.cate) === activeNav ? "active" : ""}`} key={data.id}>
                                        <a className="hover-flip-item-wrapper" href="#" onMouseOver={handleChange}>
                                            <span className="hover-flip-item">
                                                <span data-text={data.cate}>{data.cate}</span>
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Start Verticle Nav  */}
                        {/* Start Verticle Menu  */}
                        <div className="axil-vertical-nav-content">
                            {/* Start One Item  */}
                            <div className="axil-vertical-inner tab-content">
                                <div className="axil-vertical-single">
                                    <div className="row">
                                        {tabPostData.slice(0, 4).map((data) => (
                                            <div className="col-lg-3" key={data.slug}>
                                                <div className="content-block image-rounded">
                                                    <div className="post-thumbnail mb--20">
                                                    <Link href={`/post/${data.slug}`}>
                                                        <a>
                                                        <Image
                                                            src={data.featureImg}
                                                            alt={data.title}
                                                            height={130}
                                                            width={200}
                                                            priority={true}
                                                        />
                                                        </a>
                                                    </Link>
                                                    </div>
                                                    <div className="post-content">
                                                        <div className="post-cat">
                                                            <div className="post-cat-list">
                                                            <Link href={`/category/${slugify(data.cate)}`}>
                                                                <a className="hover-flip-item-wrapper">
                                                                <span className="hover-flip-item">
                                                                    <span data-text={data.cate}>
                                                                    {data.cate}
                                                                    </span>
                                                                </span>
                                                                </a>
                                                            </Link>
                                                            </div>
                                                        </div>
                                                        <h5 className="title">
                                                            <Link href={`/post/${data.slug}`}>
                                                                <a>{data.title}</a>
                                                            </Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* End One Item  */}
                        </div>
                        {/* End Verticle Menu  */}
                    </li>
                </ul>
            </li>
            <li className="menu-item-has-children">
                {/* <Link href="/">
                    <a>Fashion</a>
                </Link> */}
                <ul className="axil-submenu">
                    <li>
                        {}
                    </li>
                    {}
                </ul>
            </li>
            {}
            {}
        </ul>
    );
}

export default Nav;
