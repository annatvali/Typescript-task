import { SourceObject } from '../../controller/controller';
import './sources.css';

class Sources {
    draw(data: SourceObject[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        if (!(sourceItemTemp instanceof HTMLTemplateElement)) {
            throw new Error('Error: element not found!!!');
        }
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            if (!(sourceClone instanceof DocumentFragment)) {
                throw new Error('Error: not a fragment!');
            }
            const sourceItemNameElem = sourceClone.querySelector('.source__item-name');
            if (!(sourceItemNameElem instanceof HTMLSpanElement)) {
                throw new Error('Error: not a span element!');
            }
            sourceItemNameElem.textContent = item.name;
            const sourceItem = sourceClone.querySelector('.source__item');
            if (!(sourceItem instanceof HTMLDivElement)) {
                throw new Error('Error: not a div element!');
            }
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        const sourcesElem = document.querySelector('.sources');
        if (!(sourcesElem instanceof HTMLDivElement)) {
            throw new Error('Error: not a div element!');
        }
        sourcesElem.append(fragment);
    }
}

export default Sources;
