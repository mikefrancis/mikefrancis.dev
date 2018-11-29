import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Ticker from './components/Ticker';

const AboutModalButton = () => (
    <span className="inline-block py-2 px-4">
        <span className="block font-bold text-white pb-1 border-b-2 border-transparent hover:border-white tracking-wide uppercase">
            View
        </span>
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
            Put simply, I <span role="img" aria-label="love">❤️</span> designing and building products. If you've got an idea you'd like to discuss, please get in touch.
        </p>
    </Fragment>
);

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            footerHeight: 0,
        };
    }

    componentDidMount() {
        if (window.innerWidth >= 768) { // omg this is awful
            this.setState({
                footerHeight: document.querySelector('footer').clientHeight,
            });
        }
    }

    render() {
        const {
            siteTitle,
        } = this.props;

        return (
            <Fragment>
                <Header siteTitle={ siteTitle } />

                <main
                    className="bg-white relative z-10 py-16"
                    style={ { marginBottom: `${this.state.footerHeight}px` } }
                >
                    <section className="py-16">
                        <div className="container mx-auto px-8">
                            <div className="max-w-xl text-center md:text-left">
                                <h1 className="relative font-bold text-6xl leading-tight mb-16">
                                    Just your friendly neighbourhood <Ticker items={ ['software developer', 'UI designer', 'ops tinkerer'] } />
                                </h1>

                                <p className="font-serif leading-normal text-2xl">Currently based in London, UK.</p>
                            </div>
                        </div>
                    </section>

                    <section className="container mx-auto px-8">
                        <article className="bg-blue hover:bg-blue-dark text-white container mx-auto p-8 md:p-16 text-center rounded">
                            <h2 className="text-3xl mb-8">I Am The Seed Tree</h2>
                            <p className="font-serif text-xl mb-8 leading-normal">Marketing website built for the amazing people at Nosy Crow.</p>
                            <p className="mb-8">
                                <img src="https://placehold.it/800x300" alt="I Am The Seed Tree" />
                            </p>

                            <Modal
                                button={ <AboutModalButton /> }
                                content={ <AboutModalContent /> }
                            />
                        </article>
                    </section>
                </main>

                <Footer ref={ this.footerRef } siteTitle={ siteTitle } />
            </Fragment>
        );
    }

}

export default App;
