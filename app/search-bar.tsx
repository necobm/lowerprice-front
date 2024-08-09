'use client'

export default function SearchBar({ 
    filterText, 
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) {
    return (
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <input
                    type="text"
                    value={filterText} 
                    placeholder="Search..."
                    className="block w-full flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={(e) => onFilterTextChange(e.target.value)}
                />
                <label>
                  <input 
                    type="checkbox" 
                    checked={inStockOnly} 
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                  />
                  {' '}
                  Only show products in stock
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
}