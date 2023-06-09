// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package cinema.proxies;

public class PaymentActivity
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject paymentActivityMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "Cinema.PaymentActivity";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Start_Time("Start_Time"),
		End_Time("End_Time"),
		User_Confirm("User_Confirm"),
		isPayed("isPayed"),
		PaymentActivity_transaction("Cinema.PaymentActivity_transaction");

		private final java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public PaymentActivity(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected PaymentActivity(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject paymentActivityMendixObject)
	{
		if (paymentActivityMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, paymentActivityMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.paymentActivityMendixObject = paymentActivityMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'PaymentActivity.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static cinema.proxies.PaymentActivity initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return cinema.proxies.PaymentActivity.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static cinema.proxies.PaymentActivity initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new cinema.proxies.PaymentActivity(context, mendixObject);
	}

	public static cinema.proxies.PaymentActivity load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return cinema.proxies.PaymentActivity.initialize(context, mendixObject);
	}

	public static java.util.List<cinema.proxies.PaymentActivity> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> cinema.proxies.PaymentActivity.initialize(context, obj))
			.collect(java.util.stream.Collectors.toList());
	}

	/**
	 * Commit the changes made on this proxy object.
	 * @throws com.mendix.core.CoreException
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 * @throws com.mendix.core.CoreException
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of Start_Time
	 */
	public final java.util.Date getStart_Time()
	{
		return getStart_Time(getContext());
	}

	/**
	 * @param context
	 * @return value of Start_Time
	 */
	public final java.util.Date getStart_Time(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.util.Date) getMendixObject().getValue(context, MemberNames.Start_Time.toString());
	}

	/**
	 * Set value of Start_Time
	 * @param start_time
	 */
	public final void setStart_Time(java.util.Date start_time)
	{
		setStart_Time(getContext(), start_time);
	}

	/**
	 * Set value of Start_Time
	 * @param context
	 * @param start_time
	 */
	public final void setStart_Time(com.mendix.systemwideinterfaces.core.IContext context, java.util.Date start_time)
	{
		getMendixObject().setValue(context, MemberNames.Start_Time.toString(), start_time);
	}

	/**
	 * @return value of End_Time
	 */
	public final java.util.Date getEnd_Time()
	{
		return getEnd_Time(getContext());
	}

	/**
	 * @param context
	 * @return value of End_Time
	 */
	public final java.util.Date getEnd_Time(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.util.Date) getMendixObject().getValue(context, MemberNames.End_Time.toString());
	}

	/**
	 * Set value of End_Time
	 * @param end_time
	 */
	public final void setEnd_Time(java.util.Date end_time)
	{
		setEnd_Time(getContext(), end_time);
	}

	/**
	 * Set value of End_Time
	 * @param context
	 * @param end_time
	 */
	public final void setEnd_Time(com.mendix.systemwideinterfaces.core.IContext context, java.util.Date end_time)
	{
		getMendixObject().setValue(context, MemberNames.End_Time.toString(), end_time);
	}

	/**
	 * @return value of User_Confirm
	 */
	public final java.lang.Boolean getUser_Confirm()
	{
		return getUser_Confirm(getContext());
	}

	/**
	 * @param context
	 * @return value of User_Confirm
	 */
	public final java.lang.Boolean getUser_Confirm(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.User_Confirm.toString());
	}

	/**
	 * Set value of User_Confirm
	 * @param user_confirm
	 */
	public final void setUser_Confirm(java.lang.Boolean user_confirm)
	{
		setUser_Confirm(getContext(), user_confirm);
	}

	/**
	 * Set value of User_Confirm
	 * @param context
	 * @param user_confirm
	 */
	public final void setUser_Confirm(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean user_confirm)
	{
		getMendixObject().setValue(context, MemberNames.User_Confirm.toString(), user_confirm);
	}

	/**
	 * @return value of isPayed
	 */
	public final java.lang.Boolean getisPayed()
	{
		return getisPayed(getContext());
	}

	/**
	 * @param context
	 * @return value of isPayed
	 */
	public final java.lang.Boolean getisPayed(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.isPayed.toString());
	}

	/**
	 * Set value of isPayed
	 * @param ispayed
	 */
	public final void setisPayed(java.lang.Boolean ispayed)
	{
		setisPayed(getContext(), ispayed);
	}

	/**
	 * Set value of isPayed
	 * @param context
	 * @param ispayed
	 */
	public final void setisPayed(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean ispayed)
	{
		getMendixObject().setValue(context, MemberNames.isPayed.toString(), ispayed);
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of PaymentActivity_transaction
	 */
	public final cinema.proxies.transaction getPaymentActivity_transaction() throws com.mendix.core.CoreException
	{
		return getPaymentActivity_transaction(getContext());
	}

	/**
	 * @param context
	 * @return value of PaymentActivity_transaction
	 * @throws com.mendix.core.CoreException
	 */
	public final cinema.proxies.transaction getPaymentActivity_transaction(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		cinema.proxies.transaction result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.PaymentActivity_transaction.toString());
		if (identifier != null) {
			result = cinema.proxies.transaction.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of PaymentActivity_transaction
	 * @param paymentactivity_transaction
	 */
	public final void setPaymentActivity_transaction(cinema.proxies.transaction paymentactivity_transaction)
	{
		setPaymentActivity_transaction(getContext(), paymentactivity_transaction);
	}

	/**
	 * Set value of PaymentActivity_transaction
	 * @param context
	 * @param paymentactivity_transaction
	 */
	public final void setPaymentActivity_transaction(com.mendix.systemwideinterfaces.core.IContext context, cinema.proxies.transaction paymentactivity_transaction)
	{
		if (paymentactivity_transaction == null) {
			getMendixObject().setValue(context, MemberNames.PaymentActivity_transaction.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.PaymentActivity_transaction.toString(), paymentactivity_transaction.getMendixObject().getId());
		}
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return paymentActivityMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this) {
			return true;
		}
		if (obj != null && getClass().equals(obj.getClass()))
		{
			final cinema.proxies.PaymentActivity that = (cinema.proxies.PaymentActivity) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return entityName;
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
