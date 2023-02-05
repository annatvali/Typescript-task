import './news.css';
import { ArticleObject } from '../../controller/controller';

class News {
    draw(data: ArticleObject[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');
        if (!(newsItemTemp instanceof HTMLTemplateElement)) {
            throw new Error('Error: element not found!');
        }
        news.forEach((item, idx) => {
            const newsItemClone = newsItemTemp.content.cloneNode(true);
            if (!(newsItemClone instanceof DocumentFragment)) {
                throw new Error('Error: not a fragment!');
            }

            if (idx % 2) newsItemClone.querySelector('.news__item')?.classList.add('alt');
            const newsMetaPhotoEl = newsItemClone.querySelector('.news__meta-photo');
            if (!(newsMetaPhotoEl instanceof HTMLElement)) {
                throw new Error('Error: not a HTMLElement!');
            }
            newsMetaPhotoEl.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const newsMetaAuthorEl = newsItemClone.querySelector('.news__meta-author');
            if (!(newsMetaAuthorEl instanceof HTMLElement)) {
                throw new Error('Error: not a HTMLElement!');
            }
            newsMetaAuthorEl.textContent = item.author || item.source.name;

            const newsMetaDateEl = newsItemClone.querySelector('.news__meta-date');
            if (!(newsMetaDateEl instanceof HTMLElement)) {
                throw new Error('Error: not a HTMLElement!');
            }
            newsMetaDateEl.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescriptionTitleElement = newsItemClone.querySelector('.news__description-title');
            if (!(newsDescriptionTitleElement instanceof HTMLElement)) {
                throw new Error('Error: not a HTMLElement!');
            }
            newsDescriptionTitleElement.textContent = item.title;

            const newsDescriptionSourceElement = newsItemClone.querySelector('.news__description-source');
            if (!(newsDescriptionSourceElement instanceof HTMLElement)) {
                throw new Error('Error: not a HTMLElement!');
            }
            newsDescriptionSourceElement.textContent = item.source.name;

            const newsDescriptionContentElement = newsItemClone.querySelector('.news__description-content');
            if (!(newsDescriptionContentElement instanceof HTMLElement)) {
                throw new Error('Error: not a HTMLElement!');
            }
            newsDescriptionContentElement.textContent = item.description;

            const newsReadMoreElement = newsItemClone.querySelector('.news__read-more a');
            if (!(newsReadMoreElement instanceof HTMLElement)) {
                throw new Error('Error: not a HTMLElement!');
            }
            newsReadMoreElement.setAttribute('href', item.url);

            fragment.append(newsItemClone);
        });
        const newsElem = document.querySelector('.news');
        if (!(newsElem instanceof HTMLElement)) {
            throw new Error('Error: not a HTMLElement!');
        }
        newsElem.innerHTML = '';
        newsElem.appendChild(fragment);
    }
}

export default News;
