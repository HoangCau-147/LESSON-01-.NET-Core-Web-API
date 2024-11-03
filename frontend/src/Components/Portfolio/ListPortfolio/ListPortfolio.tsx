import React, { SyntheticEvent } from 'react';
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { PortfolioGet } from '../../../Models/Portfolio';

interface Props {
    portfolioValues: PortfolioGet[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
    return (
        <section id="portfolio">
            <h2 className="mt-3 mb-3 text-3xl font-semibold text-center md:text-4xl">My Portfolio</h2>
            <div className="relative flex flex-col items-center max-w-5xl px-10 mx-auto mb-5 space-y-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
                <>
                    {portfolioValues.length > 0 ? (
                        portfolioValues.map((portfolioValue) => {
                            return (
                                <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete} />
                            );
                        })
                    ) : (
                        <h3 className="mt-3 mb-3 text-xl font-semibold text-center md:text-xl">
                            Your portfolio is empty.
                        </h3>
                    )}
                </>
            </div>
        </section>
    );
};

export default ListPortfolio;
