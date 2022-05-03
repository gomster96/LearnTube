import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const AccordionDefault = () => {

    return(
        <Accordion className="accodion-style--1" preExpanded={'0'}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Best It Solutions Provider Agency
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium   mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artecto beatae dicta sunt explicabo. Nemo enim ipsam voluptatem quia  voluptas  aspernatur aut odit aut fugit</p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Professional & Experienced Team Member
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium   mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artecto beatae dicta sunt explicabo. Nemo enim ipsam voluptatem quia  voluptas  aspernatur aut odit aut fugit</p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Our Main Goal How To Success In IT Business
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium   mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artecto beatae dicta sunt explicabo. Nemo enim ipsam voluptatem quia  voluptas  aspernatur aut odit aut fugit</p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        We Start Our Journey Since 1990
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium   mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artecto beatae dicta sunt explicabo. Nemo enim ipsam voluptatem quia  voluptas  aspernatur aut odit aut fugit</p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordionDefault;





