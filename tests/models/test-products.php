<?php
/**
 * Class ModelsProductTest
 *
 * @package Atum_Stock_Manager_For_Woocommerce
 */

use TestHelpers\TestHelpers;
use WC_Product_Booking;
use Atum\Models\Products\AtumProductBooking;
use Atum\Models\Products\AtumProductBundle;
use Atum\Models\Products\AtumProductDownload;
use Atum\Models\Products\AtumProductGrouped;
use Atum\Models\Products\AtumProductSimple;
use Atum\Models\Products\AtumProductSubscription;
use Atum\Models\Products\WCSubscriptionVariation;
use Atum\Models\Products\AtumProductVariable;
use Atum\Models\Products\AtumProductVariableSubscription;
use Atum\Models\Products\AtumProductVariation;

/**
 * Sample test case.
 */
class ModelsProductTest extends WP_UnitTestCase { //PHPUnit_Framework_TestCase {

	public function DISABLEDtest_product_booking() {
		$product = TestHelpers::create_product();
		$obj = new AtumProductBooking( $product );
		$this->assertInstanceOf( AtumProductBooking::class, $obj );
	}

	public function DISABLEDtest_product_bundle() {
		$product = TestHelpers::create_product();
		$obj = new AtumProductBundle( $product );
		$this->assertInstanceOf( AtumProductBundle::class, $obj );
	}

	public function DISABLEDtest_product_download() {
		$product = TestHelpers::create_product();
		$obj = new AtumProductDownload( $product );
		$this->assertInstanceOf( AtumProductDownload::class, $obj );
	}

	public function test_product_grouped() {
		$obj = new AtumProductGrouped();
		$this->assertInstanceOf( AtumProductGrouped::class, $obj );
	}

	public function test_product_simple() {
		$obj = new AtumProductSimple();
		$this->assertInstanceOf( AtumProductSimple::class, $obj );
	}

	public function DISABLEDtest_product_subscription() {
		$product = TestHelpers::create_product();
		$obj = new AtumProductSubscription( $product );
		$this->assertInstanceOf( AtumProductSubscription::class, $obj );
	}

	public function DISABLEDtest_wc_subscription_variation() {
		$product = TestHelpers::create_variation_product( true );
		$obj = new WCSubscriptionVariation( $product );
		$this->assertInstanceOf( WCSubscriptionVariation::class, $obj );
	}

	public function test_product_variable() {
		$product = TestHelpers::create_variation_product();
		$obj = new AtumProductVariable( $product );
		$this->assertInstanceOf( AtumProductVariable::class, $obj );
	}

	public function DISABLEDtest_product_variable_subscription() {
		$product = TestHelpers::create_variation_product();
		$obj = new AtumProductVariableSubscription( $product );
		$this->assertInstanceOf( AtumProductVariableSubscription::class, $obj );
	}

	public function test_product_variation() {
		$product = TestHelpers::create_variation_product( true );
		$obj = new AtumProductVariation( $product );
		$this->assertInstanceOf( AtumProductVariation::class, $obj );
	}

}