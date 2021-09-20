import { Checkout as SourceCheckoutComponent } from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'Component/ContentWrapper';
import './Checkout.extension.style.scss';

import { Progress } from '../../components/';

class CheckoutComponent extends SourceCheckoutComponent {
  render() {
    const { checkoutStep } = this.props;
    return (
      <main block='Checkout'>
        <Progress checkoutStep={checkoutStep} stepMap={this.stepMap} />
        <ContentWrapper
          wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
          label={__('Checkout page')}
        >
          {this.renderSummary(true)}
          <div block='Checkout' elem='Step'>
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default CheckoutComponent;
