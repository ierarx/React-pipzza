import React from 'react'

function Categories({ value, onClickCategories }) {
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]
    return (
        <div className="categories">
            <ul>
                {categories.map((categoriesName, i) => (
                    <li
                        key={i}
                        onClick={() => onClickCategories(i)}
                        className={value === i ? 'active' : ''}
                    >
                        {categoriesName}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Categories
