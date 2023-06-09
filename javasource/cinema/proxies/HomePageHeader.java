// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package cinema.proxies;

public class HomePageHeader extends system.proxies.Image
{
	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "Cinema.HomePageHeader";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Title("Title"),
		Body("Body"),
		isButton("isButton"),
		btnTitle("btnTitle"),
		PublicThumbnailPath("PublicThumbnailPath"),
		FileID("FileID"),
		Name("Name"),
		DeleteAfterDownload("DeleteAfterDownload"),
		Contents("Contents"),
		HasContents("HasContents"),
		Size("Size");

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

	public HomePageHeader(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected HomePageHeader(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject homePageHeaderMendixObject)
	{
		super(context, homePageHeaderMendixObject);
		if (!com.mendix.core.Core.isSubClassOf(entityName, homePageHeaderMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	
	}

	/**
	 * @deprecated Use 'HomePageHeader.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static cinema.proxies.HomePageHeader initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return cinema.proxies.HomePageHeader.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static cinema.proxies.HomePageHeader initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new cinema.proxies.HomePageHeader(context, mendixObject);
	}

	public static cinema.proxies.HomePageHeader load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return cinema.proxies.HomePageHeader.initialize(context, mendixObject);
	}

	public static java.util.List<cinema.proxies.HomePageHeader> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> cinema.proxies.HomePageHeader.initialize(context, obj))
			.collect(java.util.stream.Collectors.toList());
	}

	/**
	 * @return value of Title
	 */
	public final java.lang.String getTitle()
	{
		return getTitle(getContext());
	}

	/**
	 * @param context
	 * @return value of Title
	 */
	public final java.lang.String getTitle(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Title.toString());
	}

	/**
	 * Set value of Title
	 * @param title
	 */
	public final void setTitle(java.lang.String title)
	{
		setTitle(getContext(), title);
	}

	/**
	 * Set value of Title
	 * @param context
	 * @param title
	 */
	public final void setTitle(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String title)
	{
		getMendixObject().setValue(context, MemberNames.Title.toString(), title);
	}

	/**
	 * @return value of Body
	 */
	public final java.lang.String getBody()
	{
		return getBody(getContext());
	}

	/**
	 * @param context
	 * @return value of Body
	 */
	public final java.lang.String getBody(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Body.toString());
	}

	/**
	 * Set value of Body
	 * @param body
	 */
	public final void setBody(java.lang.String body)
	{
		setBody(getContext(), body);
	}

	/**
	 * Set value of Body
	 * @param context
	 * @param body
	 */
	public final void setBody(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String body)
	{
		getMendixObject().setValue(context, MemberNames.Body.toString(), body);
	}

	/**
	 * @return value of isButton
	 */
	public final java.lang.Boolean getisButton()
	{
		return getisButton(getContext());
	}

	/**
	 * @param context
	 * @return value of isButton
	 */
	public final java.lang.Boolean getisButton(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.isButton.toString());
	}

	/**
	 * Set value of isButton
	 * @param isbutton
	 */
	public final void setisButton(java.lang.Boolean isbutton)
	{
		setisButton(getContext(), isbutton);
	}

	/**
	 * Set value of isButton
	 * @param context
	 * @param isbutton
	 */
	public final void setisButton(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean isbutton)
	{
		getMendixObject().setValue(context, MemberNames.isButton.toString(), isbutton);
	}

	/**
	 * @return value of btnTitle
	 */
	public final java.lang.String getbtnTitle()
	{
		return getbtnTitle(getContext());
	}

	/**
	 * @param context
	 * @return value of btnTitle
	 */
	public final java.lang.String getbtnTitle(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.btnTitle.toString());
	}

	/**
	 * Set value of btnTitle
	 * @param btntitle
	 */
	public final void setbtnTitle(java.lang.String btntitle)
	{
		setbtnTitle(getContext(), btntitle);
	}

	/**
	 * Set value of btnTitle
	 * @param context
	 * @param btntitle
	 */
	public final void setbtnTitle(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String btntitle)
	{
		getMendixObject().setValue(context, MemberNames.btnTitle.toString(), btntitle);
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this) {
			return true;
		}
		if (obj != null && getClass().equals(obj.getClass()))
		{
			final cinema.proxies.HomePageHeader that = (cinema.proxies.HomePageHeader) obj;
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
	@java.lang.Override
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
