///<reference path='../../../../../../../../test/lib/YUITest.d.ts'/>

///<reference path='../../../../../../../src/org/puremvc/typescript/multicore/interfaces/INotification.ts'/>

///<reference path='../../../../../../../src/org/puremvc/typescript/multicore/patterns/observer/Notification.ts'/>

module puremvc
{
	"use strict";

	import YUITest = module("YUITest");

	/**
	 * Test the PureMVC Notification class.
	 */
	export class NotificationTest
	{
		/**
		 * The name of the test case - if not provided, one is automatically generated by the
		 * YUITest framework.
		 */
		name:string = "PureMVC Notification class tests";

		/**
		 * Tests setting and getting the name using Notification class accessor methods.
		 */
		testNameAccessors():void
		{
			// Create a new Notification and use accessors to set the note name
			var note:INotification = new Notification('TestNote');

			// test assertions
			YUITest.Assert.areEqual
			(
				'TestNote',
				note.getName(),
				"Expecting note.getName() == 'TestNote'"
			);
		}

		/**
		 * Tests setting and getting the body using Notification class accessor methods.
		 */
		testBodyAccessors():void
		{

			// Create a new Notification and use accessors to set the body
			var note:INotification = new Notification(null);
			note.setBody(5);

			// test assertions
			YUITest.Assert.areSame
			(
				5,
				note.getBody(),
				"Expecting note.getBody() === 5"
			);
		}

		/**
		 * Tests setting the name and body using the Notification class constructor.
		 */
		testConstructor():void
		{
			// Create a new Notification using the Constructor to set the note name and body.
			var note:INotification = new Notification( 'TestNote', 5, 'TestNoteType' );

			// test assertions
			YUITest.Assert.areEqual
			(
				"TestNote",
				note.getName(),
				"Expecting note.getName() == 'TestNote'"
			);

			YUITest.Assert.areSame
			(
				5,
				note.getBody(),
				"Expecting note.getBody() === 5"
			);

			YUITest.Assert.areEqual
			(
				"TestNoteType",
				note.getType(),
				"Expecting note.getType() == 'TestNoteType'"
			);
		}

		/**
		 * Tests the toString method of the notification.
		 */
		testToString():void
		{
			// Create a new Notification and use accessors to set the note name.
			var note:INotification = new Notification( 'TestNote', [1,3,5], 'TestType' );
			var ts:String = "Notification Name: TestNote\nBody:1,3,5\nType:TestType";

			// test assertions
			YUITest.Assert.areEqual
			(
				ts,
				note.toString(),
				"Expecting note.testToString():void == '" + ts + "'"
			);
		}
	}
}