<div class="filters">
	<g:form method="GET" controller="inventory" action="browse">
		<g:hiddenField name="max" value="${params.max?:10 }"/>
		<div class="box">
			<h2><warehouse:message code="inventory.filterByProduct.label"/></h2>
			<div class="filter-list-item mb-3">
				<label for="searchTerms" class="form-label"><warehouse:message code="inventory.searchTerms.label"/></label>
				<g:textField name="searchTerms"
							 value="${commandInstance.searchTerms}"
							 placeholder="${warehouse.message(code:'inventory.searchTerms.label')}"
							 class="form-control" />
			</div>
			<div class="filter-list-item mb-3">
				<label for="categoryId" class="form-label">Category</label>
				<g:selectCategory id="category"
								  name="categoryId"
								  class="form-select chzn-select-deselect"
								  style="width:100%;"
								  noSelection="['':'']"
								  data-placeholder="Select a category"
								  value="${commandInstance?.category?.id}"/>
			</div>
			<div class="filter-list-item mb-3">
				<label for="tags" class="form-label">Tags</label>
				<g:selectTags name="tags" noSelection="['':'']"
							  value="${commandInstance.tags*.id}"
							  data-placeholder="Select a tag"
							  class="form-select chzn-select-deselect"
							  style="width:100%;"/>
			</div>
			<div class="filter-list-item mb-3">
				<label for="catalogs" class="form-label">Catalogs</label>
				<g:selectCatalogs name="catalogs" noSelection="['':'']"
							  value="${commandInstance?.catalogs*.id}"
							  data-placeholder="Select a catalog"
							  class="form-select chzn-select-deselect"
							  style="width:100%;"/>
			</div>
			<div class="filter-list-item mb-3">
				<label for="productTypes" class="form-label">Product Types</label>
				<g:selectProductType
								  name="productTypes"
								  class="form-select chzn-select-deselect"
								  style="width:100%;"
								  noSelection="['':'']"
								  data-placeholder="Select a product type"
								  value="${commandInstance.productTypes*.id}"/>
			</div>
			<div class="filter-list-item mb-3 form-check form-check-inline">
				<g:checkBox name="showOutOfStockProducts" value="${commandInstance.showOutOfStockProducts}" class="form-check-input"/>
				<label for="showOutOfStockProducts" class="form-check-label">${warehouse.message(code:'inventory.showOutOfStockProducts.label')}</label>
			</div>
			<div class="buttons d-flex flex-column gap-2">
				<button type="submit" class="btn btn-primary" name="searchPerformed" value="true">
					<warehouse:message code="default.search.label"/>
				</button>
				<g:link controller="inventory" action="browse" params="[resetSearch:true]" class="btn btn-secondary">
					<img src="${resource(dir:'images/icons/silk',file:'reload.png')}" alt="Reset" />
					<warehouse:message code="default.button.reset.label" default="Reset"/>
				</g:link>
			</div>
		</div>
    </g:form>
</div>
