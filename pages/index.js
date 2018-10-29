import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import Modal from './../components/Modal';
import Ticker from './../components/Ticker';

import '../style.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            footerHeight: 0,
        };
    }

    componentDidMount() {
        if (window.innerWidth >= 768) {
            this.setState({
               footerHeight: document.querySelector('footer').clientHeight,
            });
        }
    }

    render() {
        const AboutModalButton = () => (
            <span className="block py-2 px-4 font-bold text-grey-dark hover:text-grey-darkest tracking-wide uppercase no-underline">
                About
            </span>
        );

        const AboutModalContent = () => (
            <Fragment>
                <h2 className="mb-8">Hello!</h2>
                <p className="mb-4 leading-normal">
                    I'm a designer/full-stack developer currently working at Pod Point, an electric car charging network based in London. We ship APIs and web-apps written in Laravel/Lumen, as well as cross-platform apps written in React Native.
                </p>
                <p className="mb-4 leading-normal">
                    I'm also the co-founder/CTO of FortSort, a property search management tool which aims to make house-hunting a little easier.
                </p>
                <p className="mb-4 leading-normal">
                    Put simply, I ❤️ designing and building products. If you've got an idea you'd like to discuss, please get in touch.
                </p>

            </Fragment>
        );

        return (
            <Fragment>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                </Head>
                <header className="bg-white relative z-10 pt-4 md:pt-8">
                    <div className="container mx-auto px-2 flex">
                        <div className="flex-1">
                            <a className="block py-2 px-4 text-grey-darkest font-bold tracking-wide uppercase no-underline" href="/">
                                <span className="border-b-2 border-black pb-1">
                                    Mike
                                </span> Francis
                            </a>
                        </div>

                        <ul className="list-reset flex">
                            <li>
                                <span>
                                    <Modal
                                        button={ <AboutModalButton /> }
                                        content={ <AboutModalContent /> }
                                    />
                                </span>
                            </li>
                        </ul>
                    </div>
                </header>

                <main className="bg-white relative z-10 py-16" style={ { marginBottom: `${this.state.footerHeight}px` } }>
                    <section className="py-16">
                        <div className="container mx-auto px-8">
                            <div className="max-w-xl text-center md:text-left">
                                <h1 className="relative font-bold text-6xl leading-tight mb-16">
                                    Just your friendly neighbourhood <Ticker />
                                </h1>

                                <p className="font-serif leading-normal text-2xl">Currently based in London, UK.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <article className="bg-blue text-white container mx-auto p-16 text-center">
                            <h2 className="text-3xl mb-8">Lorem ipsum dolor sit amet</h2>
                            <p className="leading-normal">Adipisci aut culpa cum, dicta doloremque dolores doloribus esse inventore libero, mollitia nemo quia quidem quisquam recusandae rerum sed sunt ut vitae.</p>
                        </article>
                    </section>
                </main>

                <footer className="md:fixed md:pin-b z-0 w-full bg-grey-lighter pt-16 md:pt-32 pb-8 text-grey-darker">
                    <div className="container mx-auto px-8">
                        <div className="text-center">
                            <p className="font-serif  text-2xl mb-16">You've reached the end.</p>

                            <p className="text-6xl text-blue font-bold mb-16 md:mb-32">Thanks for reading!</p>
                        </div>

                        <div className="border-t pt-16 md:flex text-center md:text-left">
                            <div className="flex-1 pb-8">
                                &copy; Mike Francis { (new Date()).getFullYear() }
                            </div>

                            <ul className="justify-center list-reset pb-8 flex">
                                <li className="mx-3">
                                    <a className="block" href="https://github.com/mikefrancis">
                                        <span className="hidden">GitHub</span>
                                        <svg className="text-grey hover:text-grey-dark" width="24" height="24" viewBox="0 0 1792 1792"
                                             xmlns="https://www.w3.org/2000/svg">
                                            <path fill="currentcolor"
                                                  d="M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="mx-3">
                                    <a className="block" href="https://twitter.com/_mikefrancis">
                                        <span className="hidden">Twitter</span>
                                        <svg className="text-grey hover:text-grey-dark" width="24" height="24" viewBox="0 0 1792 1792"
                                             xmlns="https://www.w3.org/2000/svg">
                                            <path fill="currentcolor"
                                                  d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="mx-3">
                                    <a className="block" href="https://dribbble.com/mikefrancis">
                                        <span className="hidden">Dribbble</span>
                                        <svg className="text-grey hover:text-grey-dark" width="24" height="24" viewBox="0 0 1792 1792"
                                             xmlns="https://www.w3.org/2000/svg">
                                            <path fill="currentcolor"
                                                  d="M1152 1500q-42-241-140-498h-2l-2 1q-16 6-43 16.5t-101 49-137 82-131 114.5-103 148l-15-11q184 150 418 150 132 0 256-52zm-185-607q-21-49-53-111-311 93-673 93-1 7-1 21 0 124 44 236.5t124 201.5q50-89 123.5-166.5t142.5-124.5 130.5-81 99.5-48l37-13q4-1 13-3.5t13-4.5zm-107-212q-120-213-244-378-138 65-234 186t-128 272q302 0 606-80zm684 319q-210-60-409-29 87 239 128 469 111-75 185-189.5t96-250.5zm-805-741q-1 0-2 1 1-1 2-1zm590 145q-185-164-433-164-76 0-155 19 131 170 246 382 69-26 130-60.5t96.5-61.5 65.5-57 37.5-40.5zm223 485q-3-232-149-410l-1 1q-9 12-19 24.5t-43.5 44.5-71 60.5-100 65-131.5 64.5q25 53 44 95 2 6 6.5 17.5t7.5 16.5q36-5 74.5-7t73.5-2 69 1.5 64 4 56.5 5.5 48 6.5 36.5 6 25 4.5zm112 7q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="mx-3">
                                    <a className="block" href="https://www.linkedin.com/in/mike-francis-77a65511">
                                        <span className="hidden">LinkedIn</span>
                                        <svg className="text-grey hover:text-grey-dark" width="24" height="24" viewBox="0 0 1792 1792"
                                             xmlns="https://www.w3.org/2000/svg">
                                            <path fill="currentcolor"
                                                  d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="mx-3">
                                    <a className="block" href="mailto:mikeffrancis@gmail.com">
                                        <span className="hidden">Email</span>
                                        <svg className="text-grey hover:text-grey-dark" width="24" height="24" viewBox="0 0 1792 1792"
                                             xmlns="https://www.w3.org/2000/svg">
                                            <path fill="currentcolor"
                                                  d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }

}

export default App;
