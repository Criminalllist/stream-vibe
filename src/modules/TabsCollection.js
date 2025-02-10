import getParams from "@/utils/getParams.js";
import pixToRem from "@/utils/pixToRem.js";
import BaseComponent from "@/modules/generic/BaseComponent.js";

const rootSelector = '[data-js-tabs]';

class Tabs extends BaseComponent {
  selectors = {
    root: rootSelector,
    navigation: '[data-js-tabs-navigation]',
    button: '[data-js-tabs-button]',
    content: '[data-js-tabs-content]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  stateCSSVariables = {
    activeButtonWidth: '--tabsNavigationActiveButtonWidth',
    activeButtonOffsetLeft: '--tabsNavigationActiveButtonOffsetLeft',
  }

  constructor(rootElement) {
    super();
    this.rootElement = rootElement;
    this.params = getParams(this.rootElement, this.selectors.root);
    this.navigationElement = this.params.navigationTargetElementId ?
        document.getElementById(this.params.navigationTargetElementId) :
        this.rootElement.querySelector(this.selectors.navigation);
    this.buttonElements = [...this.navigationElement.querySelectorAll(this.selectors.button)];
    this.contentElements = [...this.rootElement.querySelectorAll(this.selectors.content)];
    this.state = this.getProxyState(
      {
        activeTabIndex: this.buttonElements.findIndex(({ariaSelected})=> ariaSelected)
      }
    )
    this.limitTabsIndex = this.buttonElements.length - 1;
    this.bindEvents()
    setTimeout(this.bindObservers, 300)
  }

  updateUI(){
    const {activeTabIndex} = this.state;

    this.buttonElements.forEach((button, index)=> {
      const isActive = index === activeTabIndex;
      button.classList.toggle(this.stateClasses.isActive, isActive);
      button.ariaSelected = isActive;
      button.tabIndex = isActive ? 0 : -1;

      if(isActive){
        this.updateNavigationCSSVars(button);
      }
    })

    this.contentElements.forEach((content, index)=> {
      const isActive = index === activeTabIndex;
      content.classList.toggle(this.stateClasses.isActive, isActive);
    })
  }

  updateNavigationCSSVars(activeButtonElement = this.buttonElements[this.state.activeTabIndex]){
     const {width, left} = activeButtonElement.getBoundingClientRect()
     const offsetLeft = left - this.navigationElement.getBoundingClientRect().left;

     this.navigationElement.style.setProperty(
       this.stateCSSVariables.activeButtonWidth,
        `${pixToRem(width)}rem`
     );

    this.navigationElement.style.setProperty(
      this.stateCSSVariables.activeButtonOffsetLeft,
      `${pixToRem(offsetLeft)}rem`
    );
  }

  activateTab(newTabIndex) {
    this.state.activeTabIndex = newTabIndex;
    this.buttonElements[newTabIndex].focus();
  }

  previousTab = () => {
    const newTabIndex = this.state.activeTabIndex === 0
      ? this.limitTabsIndex : this.state.activeTabIndex - 1;

    this.activateTab(newTabIndex);
  }

  nextTab = () => {
    const newTabIndex = this.state.activeTabIndex === this.limitTabsIndex ?
      0 : this.state.activeTabIndex + 1;

    this.activateTab(newTabIndex);
  }

  firstTab = () => {
    this.activateTab(0)
  }

  lastTab = () => {
    this.activateTab(this.limitTabsIndex)
  }

  onButtonClick(buttonIndex) {
    this.state.activeTabIndex = buttonIndex;
  }

  onKeyDown = (evt) => {
    const {target, code, metaKey} = evt;
    const isTabsContentFocused = this.contentElements.some(content => content === target);
    const isTabsButtonFocused = this.buttonElements.some(button => button === target);

    if(!isTabsButtonFocused && !isTabsButtonFocused) {
      return;
    }

    const action = {
      ArrowLeft: this.previousTab,
      ArrowRight: this.nextTab,
      Home: this.firstTab,
      End: this.lastTab,
    }[code]

    const isMacHomeKey = metaKey && code === 'ArrowLeft';

    if(isMacHomeKey) {
      evt.preventDefault()
      this.firstTab()
      return
    }

    const isMacEndKey = metaKey && code === 'ArrowRight';

    if(isMacEndKey) {
      evt.preventDefault()
      this.lastTab()
      return
    }

    if(action) {
      evt.preventDefault()
      action()
    }
  }

  bindEvents() {
    this.buttonElements.forEach((button, index) => {
      button.addEventListener('click', () => this.onButtonClick(index) )
    })

    document.addEventListener('keydown',  this.onKeyDown)
  }

  onResize = () => {
    this.updateNavigationCSSVars()
  }

  bindObservers = () => {
    const resizeObserver = new ResizeObserver(this.onResize)
    resizeObserver.observe(this.navigationElement)
  }
}

class TabsCollection {
  constructor() {
   this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Tabs(element)
    })
  }
}

export default TabsCollection