import { render, screen } from "@testing-library/react";
import { Message } from "../Message";

describe('Message', () => {
    it('renders passed text', () => {
        render( < Message author = 'author'
            text = 'Text' / > );

        const text = screen.getByText('Text');

        expect(text).toBeDefined();
    });

    it('matches snapshot', () => {
        const component = render( < Message author = 'author'
            text = 'Text' / > );

        expect(component).toMatchSnapshot();
    });
});